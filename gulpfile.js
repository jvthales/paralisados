'use strict';

var gulp			= require('gulp'),
	$				= require('gulp-load-plugins')(),
	del				= require('del'),
	bs				= require('browser-sync'),
	pkg				= require('./package.json');

var environment = '',
	paths = {
		scripts: 'src/assets/js/**/*.js',
		styles: 'src/assets/css/**/*.css',
		//fonts: 'src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
		images: 'src/assets/img/**/*.{png,jpeg,jpg,gif,svg}',
		pages: 'src/assets/**/*.html',
		//templates: 'src/templates/*.html',
		dest: 'build/arquivos'
	};

/*
gulp.task('fonts', function () {
	return gulp.src(paths.fonts)
		.pipe($.rename(function(file){
			file.extname += '.css'
		}))
		.pipe(gulp.dest(paths.dest));
});
*/

gulp.task('scripts', function () {
	return gulp.src(paths.scripts)
		.pipe($.plumber())
		.pipe($.cached('scripts'))
		.pipe($.replace('PKG_AUTHOR', pkg.author))
		.pipe($.replace('PKG_BUILD_VERSION', pkg.version))
		.pipe($.replace('PKG_NAME', pkg.name))
		.pipe($.util.env.production ? $.uglify() : $.util.noop())
		.pipe(gulp.dest(paths.dest))
});

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe($.plumber())
		.pipe($.cached('styles'))
		// REPLACEMENTS
		.pipe($.replace('PKG_ACCOUNTNAME', pkg.accountName))
		.pipe($.replace('PKG_NAME', pkg.name))
		.pipe($.replace('PKG_AUTHOR', pkg.author))
		.pipe($.replace('PKG_BUILD_VERSION', pkg.version))
		//MINIFY
		.pipe($.util.env.production ? $.cssnano({zindex: false}) : $.util.noop())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe($.plumber())
		.pipe($.newer(paths.dest))
		.pipe($.util.env.production ? $.imagemin({
			optimizationLevel: $.util.env.production ? 5 : 1,
			progressive: true,
			interlaced: true
		}) : $.util.noop())
		//.pipe($.flatten())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function () {
	return del.sync('build');
});

gulp.task('server', ['watch'], function () {

	bs({
		files: $.util.env.page ? [] : [ 'build/**', '!build/**/*.map'],
			startPath: '/index.html',
			rewriteRules: [
				{
					match: new RegExp('[\"\'](?:https?:\/\/|\/\/)' + pkg.name + '.*?(\/.*?)?[\"\']', 'gm'),
					replace: '"$1"'
				}
			],
		proxy: {
			target: 'www.' + ( $.util.env.account || pkg.accountName ) + environment + '.com.br/?debugcss=true&debugjs=true',
			proxyReq: [
				function (proxyReq) {
					proxyReq.setHeader('host', ( $.util.env.account || pkg.accountName ) + '.vtexlocal.com.br');
					proxyReq.setHeader('protocol', 'https');
					proxyReq.setHeader('accept-encoding', 'identity');
					proxyReq.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
					proxyReq.setHeader('Expires', '-1');
					proxyReq.setHeader('Pragma', 'no-cache');
				}
			]
		},
		serveStatic: ['./build'],
		open: !$.util.env.page && !$.util.env.no
	});

	return $.util.env.page && bs.create().init({
		files: [ 'build/**', '!build/**/*.map'],
		server: {
			baseDir: ['build']
		},
		ui: false,
		port: 3002,
		startPath: (typeof $.util.env.page == 'string') ? 'virtual/' + $.util.env.page + '.html' :'virtual',
		open: !$.util.env.no
	});

});

gulp.task('pages', function () {
	return $.util.env.page && gulp.src(paths.pages, {base: 'src/assets'})
		.pipe($.newer('build/virtual'))
		.pipe(gulp.dest('build/virtual'));
});

gulp.task('bump', function() {
	return gulp.src('package.json')
		.pipe($.util.env.nobump ? $.util.noop() : $.bump())
		.pipe(gulp.dest('.'));
});

gulp.task('watch', ['images', 'styles', 'scripts', 'pages'], function () {
	//gulp.watch( paths.fonts, ['fonts']);
	gulp.watch( paths.images, ['images']);
	gulp.watch( paths.styles, ['styles']);
	gulp.watch( paths.scripts, ['scripts']);
	gulp.watch( paths.pages, ['pages']);
	//gulp.watch( paths.templates, ['scripts']);
});

gulp.task('default', ['clean'], function() {
	gulp.start( 'server' );
});

gulp.task('deploy', ['clean', 'bump'], function() {
	$.util.env.production = true;

	pkg	= JSON.parse( require('fs').readFileSync('./package.json') ); //fix update pkg from bump

	gulp.start( 'images', 'styles', 'scripts' );
});