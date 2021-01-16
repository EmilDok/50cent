$(function(){
      
	(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});
	var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
   saveAs(blob, "testfile1.txt");
	
	
	$('#img, #img2').magnificPopup({
		type: 'image'
	});

	$('#img, #img2').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
			opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		},
	}
});


	jQuery(document).ready(function($) {
		$(".name span").animated("fadeInLeft");
		$(".name p").animated("fadeInUp");
		$(".container-links").animated("fadeIn");
	});

	sizech();

	$(window).resize(function() {
		sizech();
	});

	function sizech() {
		var browserMinWidth = parseInt($('body').css('width'), 10);

		if ((browserMinWidth > 1300) && (browserMinWidth < 1700)) {
			$(".head, .bd").click(function() {
				if ( jQuery(".name").css( "display" ) == "block" ) {
					$(".some, .head, .bd").css("margin", "0 0 0 -200px");
					$(".name").css("opacity", "0");
					$(".descofme").css("display", "block");
					$(".name").css("display", "none");
					setTimeout(function () {
						$(".descofme").css("opacity", "1");
					}, 500);
				} else {
					$(".some, .head, .bd").css("margin", "0px");
					$(".descofme").css("opacity", "0");
					$(".name").css("display", "block");
					$(".descofme").css("display", "none");
					setTimeout(function () {
						$(".name").css("opacity", "1");
					}, 500);
				};
			});
		};
		if (browserMinWidth > 1700) {
			$(".head, .bd").click(function() {
				if ( jQuery(".name").css( "display" ) == "block" ) {
					$(".some, .head, .bd").css("margin", "0 0 0 -350px");
					$(".name").css("opacity", "0");
					$(".descofme").css("display", "block");
					$(".name").css("display", "none");
					setTimeout(function () {
						$(".descofme").css("opacity", "1");
					}, 500);
				} else {
					$(".some, .head, .bd").css("margin", "0px");
					$(".descofme").css("opacity", "0");
					$(".name").css("display", "block");
					$(".descofme").css("display", "none");
					setTimeout(function () {
						$(".name").css("opacity", "1");
					}, 500);
				}
			});
		}
	}


	$(".aboutme").click(function() {
		if ( jQuery(".hidden_text").css( "display" ) == "none" ) {
			$(".hidden_text").css("display", "block");
			setTimeout(function () {
				$(".hidden_text").css("opacity", "1");
				$(".second_name").css("overflow", "auto");
			}, 500);
			$(".second_name").css("height", "100%");
			$(".aboutme").addClass("rot");
		} else {
			$(".hidden_text").css("opacity", "0");
			$(".second_name").css("overflow", "hidden");
			setTimeout(function () {
				$(".hidden_text").css("display", "none");
			}, 500);
			$(".aboutme").removeClass("rot");
			$(".second_name").css("height", "177px");
		}
	});

	$(window).resize(function() {
		renderer.setSize(1920, window.innerHeight);
	});
	//$(window).resize(function() {
	//	renderer.setSize(window.innerWidth, window.innerHeight);
	//	camera.setSize(window.innerWidth, window.innerHeight);
	//});
	var camera, scene, renderer,
	geometry, material, mesh;

	init();
	animate();

	function init() {

		clock = new THREE.Clock();

		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xffffff, 0);
		renderer = new THREE.WebGLRenderer( { alpha: true } );
		renderer.setSize(window.innerWidth, window.innerHeight);

		scene = new THREE.Scene();

		var ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(ambientLight);

	  //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	  camera.position.z = 1000;
	  camera.position.x = -550;
	  camera.position.y = -20;
	  scene.add(camera);

	  geometry = new THREE.CubeGeometry(200, 200, 200);
	  material = new THREE.MeshLambertMaterial({
	  	color: 0xffffff,
	  	wireframe: false
	  });
	  mesh = new THREE.Mesh(geometry, material);
	  //scene.add( mesh );
	  cubeSineDriver = 0;

	  textGeo = new THREE.PlaneGeometry(300, 300);
	  THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
	  textTexture = THREE.ImageUtils.loadTexture('img/quickText.png');
	  textMaterial = new THREE.MeshLambertMaterial({
	  	color: 0xffffff,
	  	opacity: 0.1,
	  	map: textTexture,
	  	transparent: true,
	  	blending: THREE.AdditiveBlending
	  })
	  text = new THREE.Mesh(textGeo, textMaterial);
	  text.position.z = 800;
	  // scene.add(text);

	  // light = new THREE.DirectionalLight(0xffffff,0.5);
	  // light.position.set(-1,0,1);
	  // scene.add(light);

	  smokeTexture = THREE.ImageUtils.loadTexture('img/Smoke-Element.png');
	  smokeMaterial = new THREE.MeshLambertMaterial({
	  	color: 0xffffff,
	  	opacity: 0.08,
	  	map: smokeTexture,
	  	transparent: true
	  });
	  smokeGeo = new THREE.PlaneGeometry(300, 300);
	  smokeParticles = [];

	  for (p = 0; p < 150; p++) {
	  	var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
	  	particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
	  	particle.rotation.z = Math.random() * 360;
	  	scene.add(particle);
	  	smokeParticles.push(particle);
	  }

	  document.body.appendChild(renderer.domElement);

	}

	function animate() {

	  // note: three.js includes requestAnimationFrame shim

	  delta = clock.getDelta();
	  requestAnimationFrame(animate);
	  evolveSmoke();
	  render();

	}

	function evolveSmoke() {
		var sp = smokeParticles.length;
		while (sp--) {
			smokeParticles[sp].rotation.z += (delta * 0.2);
		}
	}

	function render() {

		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
		cubeSineDriver += .01;
		mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
		renderer.render(scene, camera);
	};
});

var $container = $(".masonry-container");
$container.imagesLoaded(function () {
	$container.masonry({
		columnWidth: ".item",
		itemSelector: ".item"
	});
	$('.item').imagefill();
});

$(function() {

	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
});
