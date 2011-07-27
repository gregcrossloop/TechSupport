(function() {
	xl.os = Ti.Platform.osname;
	
	xl.createAppWindow = function() {
		// this sets the background color of the master UIView (when there are no windows/tab groups on it)
		Titanium.UI.setBackgroundColor('#84abba');
		
		// create tab group
		var tabGroup = Titanium.UI.createTabGroup();

		xl.winHelpNow = Titanium.UI.createWindow({  
		    title:'Get Help Now',
		    className:'win'
		});
		xl.tabHelpNow = Titanium.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:'Get Help Now',
		    window:xl.winHelpNow
		});

		xl.winServiceShops = Titanium.UI.createWindow({  
		    title:'Service Shops',
		    className:'win'
		});
		xl.tabServiceShops = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Service Shops',
		    window:xl.winServiceShops
		});
		

		var b1 = Titanium.UI.createButton({
			color:'#fff',
			borderRadius:5,
			borderWidth:0,
			backgroundGradient:{
				type:'linear',
				colors:[{color:'#e9e9e9',position:0.0},{color:'#d2d2d2',position:0.50},{color:'#a9a9a9',position:1.0}]
			},
			top:80,
			height:100,
			width:300,
			font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
			title:'My Computer'
		});
		
		var i = Ti.UI.createImageView({
			image: 'images/vista-my-computer-icon.png',
			width: 80,
			left: 20,
			top: 0
		});
		b1.add(i);
		var l = Ti.UI.createLabel({
			text: 'My Computer',
			font: {
				fontSize: '22',
				fontWeight: 'bold'
			},
			left: 120
		});
		b1.add(l);
		xl.winHelpNow.add(b1);
		
		
		b1.addEventListener('click', function(e) {
			xl.openSolutionsTree('Computer');
		});
		
		
		
		var webview = Ti.UI.createWebView({});
		webview.url = 'http://www.crossloop.com/search.htm';
		
		xl.winServiceShops.add(webview);
		
		tabGroup.addTab(xl.tabHelpNow);  
		tabGroup.addTab(xl.tabServiceShops);  
		
		// open tab group
		tabGroup.setActiveTab(0);
		tabGroup.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	}
	
	xl.openSolutionsTree = function(category) {
		var win = Titanium.UI.createWindow({
			title:category
		});
		
		// generate compatibility tree
		var tableview = Titanium.UI.createTableView({
			data: [
				{
					title: 'rad',
					hasChild: true
				},
				{
					title: 'even radder',
					hasChild: true
				}
			]
		});
		
		// create table view event listener
		tableview.addEventListener('click', function(e)
		{
			if (e.rowData.hasChild)
			{
				
				var win = Titanium.UI.createWindow({
					title:e.rowData.title
				});
				var tv = Titanium.UI.createTableView({
					data: [
						{
							title: 'child 1',
							hasChild: false
						},
						{
							title: 'child 2',
							hasChild: false
						}
					]
				});
				
				win.add(tv);
				//win.open({animated:true});
				xl.tabHelpNow.open(win,{animated:true});
			}
		});
		
		// add table view to the window
		win.add(tableview);
		xl.tabHelpNow.open(win,{animated:true}); 
	}
})()
