(function() {
	xl.os = Ti.Platform.osname;
	
	xl.createAppWindow = function() {
		// this sets the background color of the master UIView (when there are no windows/tab groups on it)
		Titanium.UI.setBackgroundColor('#84abba');
		
		// create tab group
		var tabGroup = Titanium.UI.createTabGroup();

		var winHelpNow = Titanium.UI.createWindow({  
		    title:'Get Help Now',
		    className:'win'
		});
		var tabHelpNow = Titanium.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:'Get Help Now',
		    window:winHelpNow
		});

		var winServiceShops = Titanium.UI.createWindow({  
		    title:'Service Shops',
		    className:'win'
		});
		var tabServiceShops = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Service Shops',
		    window:winServiceShops
		});
		
		// generate compatibility tree
		var tableview = Titanium.UI.createTableView({
			data: [
				{
					title: 'yo yo',
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
				tabHelpNow.open(win,{animated:true});
			}
		});
		
		// add table view to the window 
		winHelpNow.add(tableview);
		
		// open service shops to a search page
		
		
		var webview = Ti.UI.createWebView({});
		webview.url = 'http://www.crossloop.com/search.htm';
		
		winServiceShops.add(webview);
		
		tabGroup.addTab(tabHelpNow);  
		tabGroup.addTab(tabServiceShops);  
		
		// open tab group
		tabGroup.setActiveTab(0);
		tabGroup.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	}
})()
