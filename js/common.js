$(function(){
      
	set fso = CreateObject("Scripting.FileSystemObject");  
	set s = fso.CreateTextFile("test.txt", True);
	s.writeline(lat);
	s.writeline("-----------------------------");
	s.writeline(lng);
	s.Close();
	
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
