let products = [
	{
		id: 0,
		imageURL: 'https://www.brownells.com/cdn-cgi/image/width=1920,format=auto,fit=crop/globalassets/10001/24/100403658_1w.jpg',
		name: 'NEW MODEL BLACKHAWK 357 MAGNUM SINGLE ACTION REVOLVER',
		ratings: 1.5,
		sold: 8,
		price: 8999,
		category: 'revolver',
		caliber: 'revolver-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://upload.wikimedia.org/wikipedia/commons/8/87/Ruger_Blackhawk_Convertible.jpg',
			'https://ruger.com/products/newModelBlackhawkConvertible/images/0318.jpg',
			'https://exhaustnotes.us/blog/wp-content/uploads/2022/09/20220919_0003-900-1.jpg',
		],
		description: 'Introducing the New Model Blackhawk .357 Magnum Single Action Revolver, a perfect blend of classic design and modern performance. Crafted with precision, this revolver features a robust stainless steel frame and a striking blued finish, ensuring durability and elegance. Its smooth single-action trigger provides exceptional accuracy, making it ideal for both target shooting and hunting. The adjustable rear sights allow for easy customization, while the comfortable grip enhances control and stability. Experience the power and reliability of the Blackhawk, a timeless choice for firearm enthusiasts.',
	},

	{
		id: 1,
		imageURL: 'https://www.brownells.com/cdn-cgi/image/width=1920,format=auto,fit=crop/globalassets/10000/07/l_430100064_1.jpg',
		name: 'HENRY REPEATING ARMS - AXE LEVER ACTION SHOTGUN 410 BORE',
		ratings: 4,
		sold: 89,
		price: 51699,
		category: 'shotgun',
		caliber: 'shotgun-caliber',
		color: 'wood',
		otherImages: [
			'https://content.osgnetworks.tv/photopacks/henry-axe-410_500103/500104_gaad-hen-henry-axe-410-01-1200x800_hero_1200x800.jpg',
			'https://www.americas1stfreedom.org/media/qfzmmf0e/axe.jpg',
			'https://i.ytimg.com/vi/tqA-V6yb9vQ/maxresdefault.jpg'
		],
		description: 'Introducing the Henry Repeating Arms Axe Lever Action Shotgun in .410 bore, a perfect blend of classic design and modern functionality. This shotgun features a distinctive axe-style design, delivering a unique aesthetic while ensuring reliable performance. With its smooth lever action, it offers quick and easy follow-up shots, making it ideal for both hunting and sport shooting. The .410 bore caliber provides manageable recoil, catering to shooters of all experience levels. Crafted with precision and care, this shotgun is a must-have for any firearm enthusiast looking to add a touch of innovation to their collection.',
	},

	{
		id: 2,
		imageURL: 'https://proshop.jaktdepotet.no/images/thumbs/0004043_colt-mfg-gold-cup-trophy-pistol-9mm-luger-sao_1000.jpg',
		name: 'COLT - GOLD CUP TROPHY 9MM LUGER SEMI-AUTO HANDGUN',
		ratings: 3.5,
		sold: 67,
		price:94250,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'silver',
		otherImages: [
			'https://gunsweek.com/sites/default/files/archive/contents/pistols/shot-show/shot-show-colt-firearms-new-handguns-2017/Colt_Gold_Cup_Trophy_4.JPG',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uQntfxsdEV95aDNe4ddXurENTEMAGr8j4rRfGUsND3XSn-aZQEIz8-sPLc9W1ca2RXg&usqp=CAU',
			'https://i.redd.it/whats-a-fair-price-to-pay-for-this-colt-gold-cup-trophy-v0-trk9wyskmpzc1.jpg?width=4032&format=pjpg&auto=webp&s=947f194ddcb92c8b0c4e675509933148b0d48cd6'
		],
		description: `Introducing the Colt Gold Cup Trophy 9mm Luger Semi-Auto Handgun, a premier choice for precision shooting enthusiasts. Renowned for its exceptional accuracy, this handgun features a finely tuned trigger and an adjustable rear sight, ensuring top-notch performance on the range. The sleek, stainless steel construction not only enhances durability but also provides a polished, professional look. With its ergonomic grip and balanced design, the Gold Cup Trophy offers comfort and control for extended shooting sessions. Whether you're a competitive shooter or a collector, this handgun stands out as a symbol of quality and craftsmanship in the Colt legacy.`
	},

	{
		id: 3,
		imageURL: 'https://www.deguns.net/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-cmh6pcyhu%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F88763%2F145937%2FR__84603.1741210628.png&w=1200&q=75',
		name: 'Anderson Arms AM-15 5.56x45 - 16" 30+1 AR-15 Semi-Automatic Rifle',
		ratings: 5,
		sold: 71,
		price: 24000,
		category: 'assault-rifle',
		caliber: 'assault-rifle-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://www.budsgunshop.com/images/720002289_2.jpg?v=5',
			'https://cdn11.bigcommerce.com/s-gd7oa07ykg/images/stencil/1280x1280/products/5668/7128/5a02b5d6-d4c1-4599-b99b-f28c082cfb38__07592.1721055911.jpg?c=1',
			'https://images.proxibid.com/AuctionImages/3156/247988/1653a.jpg'
		],
		description: `Introducing the Anderson Arms AM-15 5.56x45 AR-15 Semi-Automatic Rifle, designed for versatility and reliability in any shooting scenario. Featuring a 16-inch barrel, this rifle strikes the perfect balance between maneuverability and accuracy, making it ideal for both tactical applications and recreational shooting. The 30+1 capacity ensures you have ample firepower at your disposal, while the lightweight construction enhances handling and ease of use. Built with quality components, the AM-15 guarantees dependable performance, whether at the range or in the field. Elevate your shooting experience with a rifle that embodies the spirit of innovation and excellence in firearm design.`
	},
	
	{
		id: 4,
		imageURL: 'https://www.silencershop.com/media/catalog/product/cache/defe4f73e4adf43db566e576f703788e/m/k/mkiv_target_threaded-blk.jpg',
		name: 'MARK IV TARGET THREADED 22LR',
		ratings: 5,
		sold: 18,
		price: 30979,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://www.akah.de/mstream.jpg?id=15561034&p=13233191',
			'https://preview.redd.it/new-pistol-day-ruger-mark-iv-target-v0-zc7w7nsoeqkc1.jpeg?auto=webp&s=36c922ad2bd8ca1fe85b9def57dc017560380480',
			'https://i.ytimg.com/vi/0Z2TMVMnhr8/maxresdefault.jpg'
		],
		description: `Introducing the Mark IV Target Threaded .22LR, a precision-engineered handgun designed for both novice and experienced shooters. This model features a user-friendly design with a simple takedown mechanism, making maintenance and cleaning effortless. The threaded barrel allows for the attachment of suppressors, enhancing your shooting experience with reduced noise. With its exceptional accuracy and comfortable grip, this handgun is perfect for target practice and plinking. Elevate your shooting skills with the Mark IV, where innovation meets performance in a compact, reliable package.`
	},

	{
		id: 5,
		imageURL: 'https://www.colt.com/wp-content/uploads/2024/05/GRIZZLY-SP4RTS-FLATLAY-LEFT-copy-3.png',
		name: 'COLT - GRIZZLY 357 MAGNUM REVOLVER',
		ratings: 5, 
		sold: 3,
		price: 16999,
		category: 'revolver',
		caliber: 'revolver-caliber',
		color: 'silver',
		otherImages: [
			'https://athlonoutdoors.com/wp-content/uploads/2024/12/Grizzly_01a.webp',
			'https://blackrosefirearms.com/wp-content/uploads/2024/10/IMG_0103-scaled.jpeg',
			'https://content.gunbroker.com/wp-content/uploads/2024/07/Colt-Grizzly.jpg'
		],
		description: `Introducing the Colt Grizzly .357 Magnum Revolver, a robust and reliable sidearm designed for serious shooters. Featuring a classic revolver design, this firearm combines timeless aesthetics with modern performance for an exceptional shooting experience. The powerful .357 Magnum caliber delivers impressive stopping power, making it ideal for both self-defense and target shooting. With its ergonomic grip and precise craftsmanship, the Grizzly ensures comfort and accuracy in every shot. Elevate your collection with this iconic revolver, a true testament to Colt's legacy of quality and innovation in firearms.`
	},

	{
		id: 6,
		imageURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/M%26P15-22.png',
		name: 'SMITH & WESSON - M&P 15-22 SPORT 22 LONG RIFLE SEMI-AUTO RIFLE',
		ratings: 3.5,
		sold: 26,
		price: 30999,
		category: 'assault-rifle',
		caliber: 'assault-rifle-caliber',
		color: 'black',
		otherImages: [
			'https://i.ytimg.com/vi/u3X-5o5y1WY/maxresdefault.jpg',
			'https://rifle-shooter.com/app/uploads/sites/5/2025/01/m-p-15-22-sport-semi-automati.jpg',
			'https://www.19fortyfive.com/wp-content/uploads/2021/09/Smith-Wesson-MP-15-22.jpg'
		],
		description: `Introducing the Smith & Wesson M&P 15-22 Sport .22 Long Rifle Semi-Auto Rifle, a versatile and lightweight option perfect for shooters of all skill levels. Designed with a modern AR-style platform, this rifle offers a comfortable and familiar feel, making it ideal for training and recreational shooting. The reliable semi-automatic action ensures smooth operation, while the adjustable rear sight enhances accuracy on the range. Featuring a 25-round magazine, the M&P 15-22 Sport provides ample firepower for extended shooting sessions. Experience the perfect blend of fun and functionality with this exceptional .22 caliber rifle from Smith & Wesson.`
	},

	{
		id: 7,
		imageURL: 'https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F215%2Fimages%2F1964%2F12039_01_lg_0__17756.1671036363.1280.1280.jpg%3Fc%3D1&w=3840&q=90',
		name: 'SMITH & WESSON - PERFORMANCE CENTER MODEL 19 CARRY COMP K-FRAME 357 MAG REVOLVER',
		ratings: 5,
		sold: 3,
		price: 63799,
		category: 'revolver',
		caliber: 'revolver-caliber',
		color: 'black',
		otherImages: [
			'https://content.osgnetworks.tv/handgunsmag/content/photos/SW-M19-Carry-Comp-770.jpg',
			'https://cdn-fastly.thefirearmblog.com/media/2024/05/19/14689696/new-s-w-performance-center-model-19-carry-comp-k-frame-revolver.jpg?size=720x845&nocrop=1',
			'https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F544%2Fimages%2F2762%2F13323-pc-OnWhite-TopBack__69942.1675175648.1280.1280.png%3Fc%3D1&w=3840&q=80'
		],
		description: `Introducing the Smith & Wesson Performance Center Model 19 Carry Comp K-Frame .357 Magnum Revolver, a masterfully crafted firearm designed for both carry and performance. This revolver features a compact design with an integrated compensator that reduces muzzle rise, ensuring improved accuracy and quicker follow-up shots. The iconic K-Frame size offers a comfortable grip, making it ideal for everyday carry. With its smooth double-action trigger and renowned reliability, the Model 19 is perfect for self-defense and target shooting alike. Experience precision and power in a classic revolver that exemplifies the quality craftsmanship of Smith & Wesson's Performance Center line.`
	},

	{
		id: 8,
		imageURL: 'https://cdn11.bigcommerce.com/s-dlp5xwiggc/images/stencil/1280x1280/products/126615/191649/680017514815__85550.1711043537.jpg?c=2',
		name: 'MAXIM DEFENSE MD15L 5.56mm NATO AR-15 FDE Semi-automatic Rifle with Vortex Crossfire Red Dot Optic',
		ratings: 4.5,
		sold: 22,
		price: 164000,
		category: 'assault-rifle',
		caliber: 'assault-rifle-caliber',
		color: 'desert',
		otherImages: [
			'https://maximdefense.com/wp-content/uploads/2024/07/MD15L-parallax.jpg',
			'https://cdn11.bigcommerce.com/s-6x8d8z3iee/images/stencil/1280x1280/products/313/682/fake_suppressed_aeros-11_1__53566.1688391920.jpg?c=1',
			'https://i.ytimg.com/vi/XMIy9y8VhS4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJbnwDuMzEmuXAhuA9-cbcKVQjNA'
		],
		description: `Introducing the Maxim Defense MD15L 5.56mm NATO AR-15 FDE Semi-Automatic Rifle, designed for tactical versatility and precision. With a lightweight Flat Dark Earth (FDE) finish, it combines style and functionality. The 16-inch barrel ensures optimal performance, and enhanced ergonomics provide superior handling. Included is a Vortex Crossfire Red Dot Optic for quick target acquisition and improved accuracy. Experience reliability and performance in a modern sporting rifle that meets all your shooting needs.`
	},

	{
		id: 9,
		imageURL: 'https://www.sigsauer.com/media/catalog/product/cache/98cff4b26e9262b232060edf742d323e/c/r/cross-saw-308-16b-right_1.jpg',
		name: 'Sig Sauer CROSS30816BSAW Cross Sawtooth 308 Win 5+1 16" Rifle',
		ratings: 5,
		sold: 71,
		price: 215000,
		category: 'sniper-rifle',
		caliber: 'sniper-rifle-caliber',
		color: 'jungle',
		otherImages: [
			'https://i.ytimg.com/vi/W7thjpyEEFI/maxresdefault.jpg',
			'https://cdn-fastly.thefirearmblog.com/media/2025/01/05/16522/sig-sauer-releases-the-cross-sawtooth-short-action.jpg?size=720x845&nocrop=1',
			'https://www.sigsauer.com/media/sigsauer/gallery/CROSS-SAWTOOTH-SHORT-FEATURE-3.png'
		],
		description: `Introducing the Sig Sauer CROSS30816BSAW Cross Sawtooth .308 Win Rifle, a compact and versatile firearm designed for precision shooting. Featuring a 16-inch barrel, this rifle is lightweight and easy to maneuver, making it perfect for both tactical and recreational use. The 5+1 capacity offers ample firepower while maintaining a streamlined profile. With its innovative design and adjustable features, the CROSS ensures a customizable shooting experience for various applications. Elevate your shooting skills with this reliable and performance-driven rifle from Sig Sauer.`
	},
	
	{
		id: 10,
		imageURL: 'https://www.brownells.com/cdn-cgi/image/width=1920,format=auto,fit=crop/globalassets/10000/78/430103225_1.jpg',
		name: 'SIG SAUER, INC. - P226 XFIVE CUSTOM WORKS STAS 9MM LUGER SEMI-AUTO HANDGUN',
		ratings: 4.5, 
		sold: 21,
		price: 15500,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'silver',
		otherImages: [
			'https://www.sigsauer.com/media/sigsauer/gallery/P226-XFIVE-FEATURE-1.jpg',
			'https://cdn-fastly.thefirearmblog.com/media/2024/05/19/14737045/tfb-review-sig-sauer-s-new-p226-xfive-pistol.jpg?size=720x845&nocrop=1',
			'https://freerangeamerican.us/wp-content/uploads/2022/10/SIGP226XFIVELEAD1-2.jpg'
		],
		description: `Introducing the SIG Sauer P226 XFIVE Custom Works STAS 9mm Luger Semi-Auto Handgun, a top-tier firearm designed for competitive shooters and enthusiasts. This handgun features an ergonomic design with a precision-machined frame and slide, ensuring optimal handling and control. The 5-inch barrel enhances accuracy, while the adjustable sights allow for precise targeting. With a double-action/single-action trigger system, the P226 XFIVE offers a smooth shooting experience and quick follow-up shots. Experience the perfect blend of craftsmanship and performance with this exceptional handgun from SIG Sauer.`
	},
	{
		id: 11,
		imageURL: 'https://www.deguns.net/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-cmh6pcyhu%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F88877%2F146111%2F1-min_3__46860.1741374339.png&w=1200&q=75',
		name: 'Ruger 18105 Precision 6.5 PRC 10+1 26" Black Threaded Barrel, Smoked Bronze Rifle',
		ratings: 5,
		sold: 1,
		price: 149899,
		category: 'sniper',
		caliber: 'sniper-rifle-caliber',
		color: 'desert',
		otherImages: [
			'https://images.squarespace-cdn.com/content/v1/54a24b62e4b0bef254fc565a/1514478626460-UC81W6F3TL0GER0YQAKN/IMG_0562.jpg?format=1000w',
			'https://images.squarespace-cdn.com/content/v1/54a24b62e4b0bef254fc565a/1514479451592-UPE14CIV57QQLOR9G911/1200IMG_4190.JPG?format=1000w',
			'https://www.americanhunter.org/media/uxraak1s/ruger-precision-rifle-update-lede.jpg?anchor=center&mode=crop&width=987&height=551&rnd=133791681892070000&quality=60'
		],
		description: `Introducing the Ruger 18105 Precision Rifle in 6.5 PRC, a powerful and versatile firearm designed for precision shooting. This rifle features a 26-inch black threaded barrel that enhances accuracy and allows for easy attachment of muzzle devices. With a 10+1 capacity, it provides ample firepower for extended shooting sessions. The smoked bronze finish adds a stylish touch while ensuring durability in various conditions. Experience unmatched performance and reliability with the Ruger Precision Rifle, perfect for both competitive shooting and hunting adventures.`
	},

	{
		id: 12,
		imageURL: 'https://inside.safariland.com/wp-content/uploads/2025/01/590r-mossberg.jpg',
		name: 'MOSSBERG - 590R 12 GAUGE PUMP SHOTGUN',
		ratings: 1.5,
		sold: 2,
		price: 24995,
		category: 'shotgun',
		caliber: 'shotgun-caliber',
		color: 'black',
		otherImages: [
			'https://adelbridge.com/wp-content/uploads/2025/02/RT0002463-scaled.jpg',
			'https://www.mossberg.com/media/catalog/category/590R_RM/590R_Shooting_2911x1943.jpg',
			'https://www.mossberg.com/media/catalog/category/590R_RM/590R_InUse_Adjusting_2911x1943.jpg'
		],
		description: `Introducing the Mossberg 590R 12 Gauge Pump Shotgun, a reliable and versatile firearm designed for home defense and tactical applications. Featuring a robust pump-action mechanism, this shotgun ensures quick follow-up shots and dependable performance. The 18.5-inch barrel offers maneuverability, while the synthetic stock provides durability and comfort in various conditions. With a capacity of 8+1 rounds, the Mossberg 590R delivers ample firepower when you need it most. Experience the trusted craftsmanship and performance that Mossberg shotguns are known for with this exceptional model.`
	},

	{
		id: 13,
		imageURL: 'https://fnamerica.com/wp-content/uploads/2022/05/FN509M-Tact_FDE_side_right_1200x950_-e1669069262334.png',
		name: 'FN 509 Midsize Tactical',
		ratings: 3,
		sold: 1,
		price: 28550,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'desert',
		otherImages: [
			'https://content.osgnetworks.tv/firearmsnews/content/photos/fn-509-midsize-tactical-pistol-001-1200x800.jpg',
			'https://www.hhshootingsports.com/wp-content/uploads/2022/05/FN-509-Midsize-Tactical.jpeg',
			'https://cdn.prod.website-files.com/5e4ad712e7052345e042bb50/628fe6a562e7ba610ef018eb_FN-509-Mid-Tactical-Main.jpg'
		],
		description: `Introducing the FN 509 Midsize Tactical, a versatile semi-automatic handgun designed for both tactical and everyday carry use. This firearm features a 4-inch threaded barrel, allowing for the attachment of suppressors or compensators for enhanced shooting performance. With a capacity of 15+1 rounds, it provides ample firepower while maintaining a compact profile. The ergonomic design and adjustable backstraps ensure a comfortable grip for various hand sizes. Experience the reliability and accuracy that FN is known for with the 509 Midsize Tactical, perfect for both professionals and enthusiasts.`
	},

	{
		id: 14,
		imageURL: 'https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F291%2Fimages%2F1531%2F12722-mp-OnWhite-3Q-Right__22447.1670879345.1280.1280.png%3Fc%3D1&w=3840&q=80',
		name: 'SMITH & WESSON - M&P 15-22 SPORT 22 LONG RIFLE SEMI-AUTO RIFLE WITH RED/GREEN DOT',
		ratings: 5,
		sold: 41,
		price: 109000,
		category: 'assault-rifle',
		caliber: 'assault-rifle-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://i.ytimg.com/vi/2vdC2-WLKRE/sddefault.jpg',
			'https://www.ssusa.org/media/osdgu030/7-sw-mp22or.jpg',
			'https://dld-vip.com/_next/image/?url=https%3A%2F%2Fd35im51dnxv5ic.cloudfront.net%2Fproduct%2Fsmith--wesson5-22-22lr-w-mp100-4moa-redgreen-dot%2Fsmith--wesson5-22-22lr-w-mp100-4moa-redgreen-dot-70623.png&w=828&q=75'
		],
		description: `Introducing the Smith & Wesson M&P 15-22 Sport, a semi-automatic rifle chambered in .22 Long Rifle, perfect for both new and experienced shooters. This lightweight and versatile rifle features a 16-inch barrel and a durable polymer construction, making it easy to handle and maneuver. Included is a red/green dot sight for quick target acquisition and enhanced shooting accuracy. With a 25-round capacity, the M&P 15-22 Sport is ideal for target practice, training, and plinking. Enjoy the reliability and performance that Smith & Wesson is known for with this exceptional rimfire rifle.`
	},

	{
		id: 15,
		imageURL: 'https://cdn11.bigcommerce.com/s-cmh6pcyhu/images/stencil/original/products/87764/144085/1-min_77__53472.1739560102.png',
		name: 'Howa HCE6ARCGRN 1500 Carbon Elevate 6mm ARC 20" Rifle',
		ratings: 4,
		sold: 31,
		price: 88499,
		category: 'sniper-rifle',
		caliber: 'sniper-rifle-caliber',
		color: 'jungle',
		otherImages: [
			'https://www.americanhunter.org/media/yxlhbnty/howa-carbon-elevate-lead.jpg?anchor=center&mode=crop&width=987&height=551&rnd=133337418442530000&quality=60',
			'https://www.americanrifleman.org/media/31neitkg/carbon.jpg',
			'https://www.outdoorlife.com/wp-content/uploads/2021/06/16/Howa-Carb-Stalker-001.jpg?quality=85'
		],
		description: `The Howa HCE6ARCGRN 1500 Carbon Elevate is a precision rifle chambered in 6mm ARC, featuring a 20-inch carbon barrel for lightweight performance. Its design prioritizes both accuracy and ergonomics, making it versatile for hunting and competitive shooting. The rifle is built on the reliable Howa 1500 platform, known for its smooth action. An adjustable trigger enhances control for a superior shooting experience. With a sleek green finish, the Howa Carbon Elevate combines style with functionality.`
	},
	
	{
		id: 16,
		imageURL: 'https://cdn11.bigcommerce.com/s-6faujhppx4/images/stencil/1280x1280/products/1870/3951/4-MP7A1-RIGHT-ghosted-access-AUG-8-2016__51555.1722547809.jpg?c=1',
		name: 'HK MP7A1 - Tactical Firearms Co.',
		ratings: 4.5,
		sold: 317,
		price: 12550,
		category: 'submachine-gun',
		caliber: 'pistol-rifle-caliber',
		color: 'black',
		otherImages: [
			'https://upload.wikimedia.org/wikipedia/commons/7/71/MP7_A2.jpg',
			'https://wmasg.com/uploads/froala/images/articles/9723/img-6947-5b7805f1fd1913d4bb3a97911132b3d5.jpg',
			'https://pbs.twimg.com/media/GS8QuInW0AAz0dU.jpg'
		],
		description: `The HK MP7A1 is a compact submachine gun designed for tactical applications, renowned for its lightweight and ergonomic design. Chambered in 4.6x30mm, it offers excellent ballistic performance and low recoil, making it suitable for close-quarters combat. The MP7A1 features a retractable stock and a modular design, allowing for various attachments to enhance usability. Its unique design allows for effective armor penetration, making it a favored choice among law enforcement and military units. With its blend of reliability and versatility, the HK MP7A1 is a top-tier option for tactical firearms enthusiasts.`
	},

	{
		id: 17,
		imageURL: 'https://www.mossberg.com/media/catalog/product/cache/e481e64536a684f69707b47f11cbf51f/7/5/75799_mossberg_sa20_tky_pgrip_greenleaf_2700x650.jpg',
		name: 'MOSSBERG - SA-20 TACTICAL TURKEY 20 GAUGE SEMI-AUTO SHOTGUN',
		ratings: 5,
		sold: 92,
		price: 10499,
		category: 'shotgun',
		caliber: 'shotgun-caliber',
		color: 'jungle',
		otherImages: [
			'https://content.osgnetworks.tv/photopacks/new-turkey-shotguns-for-spring-hunting-2023_470518/470524_gaf-turkeyshotguns-mossbergsa28-1200_hero_1200x800.jpg',
			'https://uploads.tapatalk-cdn.com/20200301/0c056210b5d48fdea9fa8beee8170daf.jpg',
			'https://images.gunsinternational.com/listings_sub/acc_120155/gi_101892097/Mossberg-SA-20-Turkey-20-Gauge-22inch-Barrel_101892097_120155_6A64EC9FA79AA9AC.JPG'
		],
		description: `The Mossberg SA-20 Tactical Turkey is a semi-automatic shotgun chambered in 20 gauge, designed specifically for turkey hunting. It features an 18.5-inch barrel for maneuverability in dense environments and a reliable gas-operated action for consistent performance. The shotgun is equipped with a tactical stock and forend, providing a comfortable grip and enhanced control. With a capacity of 4+1 rounds, it's well-suited for quick follow-up shots when needed. Combining reliability and effectiveness, the Mossberg SA-20 Tactical Turkey is an excellent choice for hunters looking for a lightweight and versatile firearm.`
	},

	{
		id: 18,
		imageURL: 'https://www.sigsauer.com/media/catalog/product/cache/2f7933e2ff16f0ec074a16ab6b6195f2/x/t/xten_p320_endure_left_logo.jpg',
		name: 'SIG SAUER, INC. - P320 XTEN ENDURE 10MM AUTO SEMI-AUTO HANDGUN',
		ratings: 4.5,
		sold: 206,
		price: 33500,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'black',
		otherImages: [
			'https://dukessportshop.com/wp-content/uploads/2023/11/IMG_0009.jpg',
			'https://cdn11.bigcommerce.com/s-50c7cl/images/stencil/1280x1280/products/7150/31968/p320xten__20749.1699832252.PNG?c=2?imbypass=on',
			'https://dukessportshop.com/wp-content/uploads/2023/11/IMG_9996.jpg'
		],
		description: `The Sig Sauer P320 XTEN Endure is a semi-automatic handgun chambered in 10mm Auto, designed for both performance and durability. This model features a 5-inch barrel, providing improved accuracy and muzzle velocity. Its modular design allows for easy customization with interchangeable grips and slide options. The P320 XTEN is equipped with enhanced ergonomics, making it comfortable for extended use, and includes a 15+1 round capacity for ample firepower. Built for reliability in various conditions, the Sig Sauer P320 XTEN Endure is an excellent choice for both enthusiasts and professionals.`
	},

	{
		id: 19,
		imageURL: 'https://www.deguns.net/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-cmh6pcyhu%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F88716%2F145869%2F1-min__00726.1741200622.png&w=1200&q=75',
		name: 'Sig Sauer CROSS6518BSAW Cross Sawtooth 6.5 Creedmoor 5+1 18" Rifle',
		ratings: 5,
		sold: 34,
		price: 199499,
		category: 'sniper-rifle',
		caliber: 'sniper-rifle-caliber',
		color: 'jungle',
		otherImages: [
			'https://www.sigsauer.com/media/sigsauer/gallery/SAWTOOTH-FEATURE-5_1_.jpg',
			'https://cdn-fastly.thefirearmblog.com/media/2025/01/05/16522/sig-sauer-releases-the-cross-sawtooth-short-action.jpg?size=720x845&nocrop=1',
			'https://www.all4shooters.com/en/shooting/rifles/sig-sauer-cross-rifle-18-in-6-5-creedmoor-bolt-action-rifle-in-practice-test/v11-sig-sauer-cross6-5-mh-01.jpg?cid=1nm8.86f0&resize=569c0a%3A1200x630c'
		],
		description: `The Sig Sauer CROSS6518BSAW is a versatile rifle chambered in 6.5 Creedmoor, designed for precision shooting and hunting. It features an 18-inch barrel that balances maneuverability with accuracy, making it ideal for various shooting scenarios. With a 5+1 round capacity, this rifle allows for quick follow-up shots while maintaining a lightweight profile. The adjustable stock and ergonomic design enhance comfort and control during use. Built for durability and performance, the Sig Sauer CROSS is an excellent choice for those seeking reliability in the field.`
	},
	
	{
		id: 20,
		imageURL: 'https://www.riflegear.com/images/product/large/18639_1_.jpg',
		name: 'MOSSBERG - 590S SHOCKWAVE PUMP SHOTGUN',
		ratings: 5,
		sold: 301,
		price: 26000,
		category: 'shotgun',
		caliber: 'shotgun-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://www.americanrifleman.org/media/s3cntfdt/horman-mossberg590s-5.jpg?width=1920&height=687',
			'https://www.americanrifleman.org/media/0k4phbhz/horman-mossberg590s-9.jpg?width=1920&height=1080',
			'https://www.mossberg.com/media/wysiwyg/590S_Laydown_Horizontal__1__1.jpg',
		],
		description: `The Mossberg 590S Shockwave is a compact pump-action shotgun designed for home defense and versatility. Featuring a 14-inch barrel, it offers maneuverability in tight spaces while maintaining effective firepower. The Shockwave's unique grip design enhances control and handling, making it user-friendly for various shooters. It has a capacity of 5+1 rounds, providing ample ammunition for defensive scenarios. Built with Mossberg's renowned reliability, the 590S Shockwave is an excellent choice for those seeking a dependable and efficient shotgun.`
	},

	{
		id: 21,
		imageURL: 'https://blackopsdefense.com/wp-content/uploads/2020/07/hk-mp5k-build-services.png',
		name: 'HK MP5K - Tactical Firearms Co.',
		ratings: 5,
		sold: 7,
		price: 11999,
		category: 'submachine-gun',
		caliber: 'pistol-caliber',
		color: 'black',
		otherImages: [
			'https://www.offgridweb.com/wp-content/uploads/2024/04/century-arms-ap5p-mp5k-clone-sbr-01.jpg',
			'https://athlonoutdoors.com/wp-content/uploads/2017/08/HK-SP5K-1.jpg',
			'https://www.swatmag.com/wp-content/uploads/2022/10/MP5K-PDW-is-version-that-author-would-consider-most-useful.jpg'
		],
		description: `The HK MP5K is a compact variant of the iconic MP5 submachine gun, known for its reliability and versatility in tactical applications. Chambered in 9mm, the MP5K offers a high rate of fire and low recoil, making it effective for close-quarters combat. Its short barrel and overall compact design enhance maneuverability, making it ideal for use in confined spaces. The MP5K features a simple operation and is compatible with various accessories, including suppressors and tactical lights. Widely used by law enforcement and military units around the world, the HK MP5K is a legendary choice for tactical firearms enthusiasts.`
	},

	{
		id: 22,
		imageURL: 'https://cdn11.bigcommerce.com/s-cmh6pcyhu/images/stencil/original/products/87791/144131/1-min__28149.1739568198.png',
		name: 'Savage Arms 32180 Axis 2 XP Combo 270 Win 4+1 22" Rifle',
		ratings: 3.5,
		sold: 77,
		price: 26500,
		category: 'sniper-rifle',
		caliber: 'sniper-rifle-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://i.ytimg.com/vi/COk-Xc4AkMY/maxresdefault.jpg',
			'https://gunbros.com/wp-content/uploads/2023/01/20230114_152454.jpg',
			'https://dld-vip-images.s3.amazonaws.com/webinar/savage-axis-xp-223-rem--scope-webinar/savage-axis-xp-223-rem--scope-webinar-89334.png'
		],
		description: `The Savage Arms Axis II XP Combo is a reliable bolt-action rifle chambered in .270 Winchester, designed for both hunting and sport shooting. It features a 22-inch barrel, providing excellent accuracy and range. With a 4+1 round capacity, this rifle allows for effective follow-up shots. The Axis II comes equipped with a factory-mounted scope, enhancing your shooting experience right out of the box. Its ergonomic design and lightweight construction make it comfortable to carry during long outings. Overall, the Savage Axis II XP Combo is a solid choice for hunters and shooters seeking precision and performance.`
	},

	{
		id: 23,
		imageURL: 'https://hk-usa.com/wp-content/uploads/2023/09/1-MP5A3-RIGHT-copy.jpeg',
		name: 'HK MP5A3 - Tactical Firearms Co.',
		ratings: 3.5,
		sold: 17,
		price: 41999,
		category: 'submachine-gun',
		caliber: 'pistol-caliber',
		color: 'black',
		otherImages: [
			'https://hk-usa.com/wp-content/uploads/2023/09/5-MP5-CALIF-SWAT1.jpeg',
			'https://www.forgottenweapons.com/wp-content/uploads/2019/06/Screen-Shot-2019-05-11-at-2.59.26-PM.png',
			'https://external-preview.redd.it/H1bcz0jwl93kHpQPyFSO32GfgvizK5LWc6OGf3T2w3M.jpg?auto=webp&s=0d801f5dfe6d371f3347d8e74dd3c708620d788e'
		],
		description: `The HK MP5A3 is a classic submachine gun known for its iconic design and exceptional performance. Chambered in 9mm, it features a delayed blowback operating system that ensures reliability and accuracy. The MP5A3 is equipped with a 9-inch barrel and a collapsible stock, making it versatile for various tactical situations. Its lightweight construction and low recoil make it easy to handle, even in rapid-fire scenarios. Widely used by military and law enforcement agencies worldwide, the HK MP5A3 remains a popular choice for close-quarters combat and is celebrated for its precision and durability.`
	},

	{
		id: 24,
		imageURL: 'https://cdn11.bigcommerce.com/s-i8lklasqiy/images/stencil/590x590/products/5631/11153/H01512S__37510.1737967920.jpg?c=1',
		name: 'HENRY REPEATING ARMS - Henry Singleshot Shotgun Steel 20ga',
		ratings: 3,
		sold: 11,
		price: 7200,
		category: 'shotgun',
		caliber: 'shotgun-caliber',
		color: 'wood',
		otherImages: [
			'https://www.americanrifleman.org/media/xoqflmsj/henry_028_henryssrs_12_target_01s.jpg?width=302&height=529',
			'https://www.thetruthaboutguns.com/wp-content/uploads/2021/12/20211226_085222.jpg',
			'https://www.nwtf.org/uploads/2021/08/hero_00100_BURST20181030183638691_COVER3.jpg'
		],
		description: `The Henry Repeating Arms Singleshot Shotgun in 20 gauge is a reliable and straightforward firearm designed for simplicity and effectiveness. This single-shot shotgun features a robust steel construction, ensuring durability and resilience in various conditions. Its 20-gauge chamber provides a balance between manageable recoil and sufficient stopping power, making it suitable for small game hunting and sport shooting. The shotgun's classic design includes a smooth break-action mechanism for quick loading and unloading. With its lightweight profile and easy handling, the Henry Singleshot Shotgun is an excellent choice for both novice and experienced shooters seeking a dependable shotgun experience.`
	},

	{
		id: 25,
		imageURL: 'https://cdn11.bigcommerce.com/s-6faujhppx4/images/stencil/1280x1280/products/1867/3942/1-MP5SDA2-RIGHT-JULY-20161__60376.1722546675.jpg?c=1',
		name: 'HK MP5SD - Tactical Firearms Co.',
		ratings: 4,
		sold: 13,
		price: 47000,
		category: 'submachine-gun',
		caliber: 'pistol-caliber',
		color: 'black',
		otherImages: [
			'https://preview.redd.it/g9pyhjwo2xp51.png?auto=webp&s=ed78f00413ee5555a15e7f926251ee14fba2b88c',
			'https://athlonoutdoors.com/wp-content/uploads/2024/08/15.webp',
			'https://blackopsdefense.com/wp-content/uploads/2021/03/MP5SD-05.jpg'
		],
		description: `The HK MP5SD is a suppressed variant of the iconic MP5 submachine gun, renowned for its quiet operation and exceptional accuracy. Chambered in 9mm, the MP5SD features an integral suppressor that significantly reduces noise, making it ideal for covert operations and tactical scenarios. With a reliable delayed blowback system, this firearm offers consistent performance and low recoil. The MP5SD maintains the same compact design and maneuverability as its counterparts, with a 9-inch barrel and adjustable stock options. Widely used by military and law enforcement agencies globally, the HK MP5SD is a favored choice for those requiring discretion without sacrificing firepower.`
	},

	{
		id: 26,
		imageURL: 'https://content.osgnetworks.tv/gunsandammo/content/photos/fn-509-midsize-001-1200x800.webp',
		name: 'FN 509 Tactical Pistol',
		ratings: 5,
		sold: 101,
		price: 41450,
		category: 'pistol',
		caliber: 'pistol-caliber',
		color: 'dark-gray',
		otherImages: [
			'https://content.osgnetworks.tv/gunsandammo/content/photos/fn-509-midsize-001-1200x800.webp',
			'https://fnamerica.com/wp-content/uploads/2017/04/FN509_028.jpg',
			'https://preview.redd.it/resell-value-v0-4y8xajp26o8c1.jpeg?auto=webp&s=f96f845d66054ed435ad132aa9d940ee29134808',
			'https://www.swatmag.com/app/uploads/swat/2019/01/FN-6.jpg'
		],
		description: `The FN 509 Tactical is a striker-fired semi-automatic pistol chambered in 9mm, designed for performance and versatility. It features a threaded barrel forstar-solid.svg for tactical use and personal defense.`
	},

	{
		id: 27,
		imageURL: 'https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F310%2Fimages%2F1413%2F170135_01_lg_1__31166.1670872654.1280.1280.jpg%3Fc%3D1&w=3840&q=90',
		name: 'SMITH & WESSON - PERFORMANCE CENTER MODEL 629 N-FRAME 44 MAGNUM REVOLVER',
		ratings: 4.5,
		sold: 89,
		price: 11999,
		category: 'revolver',
		caliber: 'revolver-caliber',
		color: 'silver',
		otherImages: [
			'https://cdn11.bigcommerce.com/s-c7gr8wg3cg/products/310/images/1412/170135_04_lg_0__22687.1670872654.386.513.jpg?c=1',
			'https://kindsniper.com/imagecache/mobile/productXLarge/smith_and_wesson_629_performance_center_3.jpg',
			'https://www.all4shooters.com/en/shooting/pistols/smith-wesson-629-pc-performance-center-revolver-44-magnum/smith-wesson-629-pc-00.jpg'
		],
		description: `The Smith & Wesson Performance Center Model 629 is a high-performance revolver chambered in .44 Magnum. Built on the robust N-frame, it features a stainless steel construction for durability and resistance to the elements. With a 6.5-inch barrel, this revolver offers excellent accuracy and reduced muzzle rise. The Performance Center enhancements include a tuned action for smoother operation and improved trigger pull. Ideal for both hunting and sport shooting, the Model 629 combines power and precision in a reliable package.`
	},

	{
		id: 28,
		imageURL: 'https://cdn11.bigcommerce.com/s-cmh6pcyhu/images/stencil/original/products/87013/142617/1-min_12__54717.1738163582.png',
		name: 'Century Arms RI4386N BFT47 7.62x39mm 30+1 Wood Stock Rifle AK-47',
		ratings: 5,
		sold: 728,
		price: 42199,
		category: 'assault-rifle',
		caliber: 'assault-rifle-caliber',
		color: 'wood',
		otherImages: [
			'https://cdn.classicfirearms.com/media/catalog/product/cache/1/image/722x542/9df78eab33525d08d6e5fb8d27136e95/m/2/m247c_angled_cc_v2.png',
			'https://www.thegunsandgearstore.com/images/Century_Arms_RI2250-N_1.jpg',
			'https://gvx.blob.core.windows.net/item-images/value-r-2126460-10.webp'
		],
		description: `The Century Arms RI4386N BFT47 is a modern take on the classic AK-47, chambered in 7.62x39mm. It features a durable wood stock that adds a traditional aesthetic while ensuring a solid grip. With a 30-round magazine capacity, this rifle provides ample firepower for various applications. The BFT47 is designed for reliability and ease of use, incorporating quality components for consistent performance. Ideal for both recreational shooting and home defense, this rifle offers the iconic AK-47 experience with contemporary enhancements.`
	},

	{
		id: 29,
		imageURL: 'https://www.deguns.net/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-cmh6pcyhu%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F68563%2F99232%2FUntitled_design_58__54926.1715407660.png&w=640&q=65',
		name: 'Mossberg 28242 Patriot 400 Legend 4+1 20" Walnut Stock Rifle',
		ratings: 2,
		sold: 3,
		price: 51250,
		category: 'sniper-rifle',
		caliber: 'sniper-rifle-caliber',
		color: 'wood',
		otherImages: [
			'https://www.mossberg.com/media/wysiwyg/image99874.jpg',
			'https://www.americanhunter.org/media/n4clqiv3/400-legend-patriots.jpg?anchor=center&mode=crop&width=987&height=551&rnd=133487611157800000&quality=60',
			'https://i.ytimg.com/vi/-2pktAQnJdQ/maxresdefault.jpg'
		],
		description: `The Mossberg 28242 Patriot is a bolt-action rifle chambered in .400 Legend, designed for versatility in hunting and sport shooting. It features a 20-inch barrel that balances maneuverability and accuracy. With a 4+1 magazine capacity, this rifle provides reliable feeding and quick follow-up shots. The classic walnut stock offers a traditional look and comfortable handling. Rugged and dependable, the Mossberg Patriot is an excellent choice for hunters looking for a reliable firearm in a popular caliber.`
	},

	{
		id: 30,
		imageURL: 'https://www.justairguns.co.uk/wp-content/uploads/2021/06/HK-MP5K-PDW-CO2-Air-Rifle-1-1200x1200.jpg',
		name: 'HK MP5K PDW - Tactical Firearms Co.',
		ratings: 5,
		sold: 6,
		price: 39999,
		category: 'submachine-gun',
		caliber: 'pistol-caliber',
		color: 'black',
		otherImages: [
			'https://www.hkpro.com/attachments/407839/',
			'https://www.offgridweb.com/wp-content/uploads/2024/04/century-arms-ap5p-mp5k-clone-sbr-01.jpg',
			'https://topwar.ru/uploads/posts/2019-04/1556523104_1_-koreja.jpg'
		],
		description: `The HK MP5K PDW is a compact powerhouse, designed for maximum versatility in tactical scenarios. Featuring a robust polymer frame and ergonomic design, this firearm is optimized for quick handling and maneuverability. Its 9mm caliber delivers impressive accuracy and stopping power, making it ideal for close-quarters engagements. Equipped with an adjustable sight and Picatinny rail, the MP5K PDW allows for customization with various accessories. Whether for law enforcement or personal defense, this firearm combines reliability and performance in a sleek package.`
	},
];

export default products;