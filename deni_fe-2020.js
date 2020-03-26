var featureData = [
	{
		"icon": "cloud_upload",
		"name": "Backup data harian ke Cloud",
		"description": "Jangan takut kehilangan data karena semua paket domain dan hosting di DomaiNesia memiliki backup harian ke cloud"
	},
	{
		"icon": "assignment_turned_in",
		"name": "99,9% Garansi Uptime",
		"description": "Kami memberikan garansi 99.9% uptime untuk semua paket hosting murah dengan jaminan SLA"
	},
	{
		"icon": "email",
		"name": "MailChannels Spam Filter",
		"description": "Segala bentuk spam email sudah kami antisipasi dengan MailChannels Spam Filter guna memastikan email anda sampai ke tujuan"
	},
	{
		"icon": "add_location",
		"name": "Pilihan Lokasi Server",
		"description": "Bebas memilih 5 lokasi server di berbagai datacenter yang tersebar di Indonesia, Singapura, Amerika, Inggris, dan Jepang"
	}
];

var featureDataRight = [
	{
		"icon": "cloud_upload",
		"name": "Backup data harian ke Cloud",
		"description": "Jangan takut kehilangan data karena semua paket domain dan hosting di DomaiNesia memiliki backup harian ke cloud"
	},
	{
		"icon": "assignment_turned_in",
		"name": "99,9% Garansi Uptime",
		"description": "Kami memberikan garansi 99.9% uptime untuk semua paket hosting murah dengan jaminan SLA"
	},
	{
		"icon": "email",
		"name": "MailChannels Spam Filter",
		"description": "Segala bentuk spam email sudah kami antisipasi dengan MailChannels Spam Filter guna memastikan email anda sampai ke tujuan"
	},
	{
		"icon": "add_location",
		"name": "Pilihan Lokasi Server",
		"description": "Bebas memilih 5 lokasi server di berbagai datacenter yang tersebar di Indonesia, Singapura, Amerika, Inggris, dan Jepang"
	}
];

featureData.forEach(loopFeatureViewLeft);
featureDataRight.forEach(loopFeatureViewRight);

function loopFeatureViewLeft(item, idx){
	document.getElementById('feature-left').innerHTML += 
		'<p class="fs-20">' + '<span class="material-icons right-position brown mleft-10">' + item.icon + '</span>' +
		'<span class="right-position brown">' + item.name + '</span>' + '</p>' + '<br/>' +
		'<p class="feature-desc brown">' + item.description + '</p>' + '<br/>';
}

function loopFeatureViewRight(item, idx){
	document.getElementById('feature-right').innerHTML += 
		'<p class="fs-20">' + '<span class="material-icons left-position brown mleft-10">' + item.icon + '</span>' +
		'<span class="left-position brown">' + item.name + '</span>' + '</p>' + '<br/>' +
		'<p class="feature-desc-right brown">' + item.description + '</p>' + '<br/>';
}

var packagePrice = [
	{
		"title": "Bisnis",
		"price": "Rp. 90.000,00",
		"space": "6 GB Space",
		"ram": "2 GB RAM",
		"bandwidth": "Unlimited Bandwidth",
		"core": "2 CPU Core",
		"website": "Unlimited website",
		"mail": "Unlimited email",
		"free": "Gratis domain",
		"ssh": "Akses SSH"
	},
	{
		"title": "Bisnis 2",
		"price": "Rp. 100.000,00",
		"space": "6 GB Space",
		"ram": "2 GB RAM",
		"bandwidth": "Unlimited Bandwidth",
		"core": "2 CPU Core",
		"website": "Unlimited website",
		"mail": "Unlimited email",
		"free": "Gratis domain",
		"ssh": "Akses SSH"
	},
	{
		"title": "Bisnis 3",
		"price": "Rp. 90.000,00",
		"space": "6 GB Space",
		"ram": "2 GB RAM",
		"bandwidth": "Unlimited Bandwidth",
		"core": "2 CPU Core",
		"website": "Unlimited website",
		"mail": "Unlimited email",
		"free": "Gratis domain",
		"ssh": "Akses SSH"
	}
];
packagePrice.forEach(loopPackage);

function loopPackage(item, idx){
	document.getElementById('package').innerHTML +=
	'<div class="package-card">' +
		'<h3 class="brown-2">' + item.title + '</h3>' +
		'<div class="blue-bg">' +
			'<span class="fs-3">' + item.price + '/bulan' + '</span>' +
		'</div>' +
		'<p class="brown-2">' + item.space + '</p>' +
		'<p class="brown-2">' + item.ram + '</p>' +
		'<p class="brown-2">' + item.bandwidth + '</p>' +
		'<p class="brown-2">' + item.core + '</p>' +
		'<p class="brown-2">' + item.website + '</p>' +
		'<p class="brown-2">' + item.mail + '</p>' +
		'<p class="brown-2">' + item.free + '</p>' +
		'<p class="brown-2">' + item.ssh + '</p>' +
	'</div>';
}

var customers = [
	{
		"imageUrl": "https://4.bp.blogspot.com/-j4SyZdrtYTY/XgrrFX4kaUI/AAAAAAAABQQ/RihCfdGXpdkIQUSo3PKFbZFPEijrYejaQCLcBGAsYHQ/s1600/tokopedia.png"
	},
	{
		"imageUrl": "https://4.bp.blogspot.com/-4CKBL8PTtVI/W-wPdQUvvfI/AAAAAAAABt8/aqQ3fWFEtOk4hfbtN442Zcdr712epKdgQCLcBGAs/w1200-h630-p-k-no-nu/unnamed.jpg"
	},
	{
		"imageUrl": "https://laz-img-cdn.alicdn.com/tfs/TB15BYfh4rI8KJjy0FpXXb5hVXa-200-200.png"
	},
	{
		"imageUrl": "https://upload.wikimedia.org/wikipedia/id/7/74/Liga_1_Shopee.png"
	}
];
customers.forEach(loopCustomers);

function loopCustomers(item, idx){
	document.getElementById('customer').innerHTML += 
	'<div class="customer-logo">' +
		'<img src="' + item.imageUrl + '" width="250" height="200" />'
	+ '</div>'
}