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
		
		var data = [];
		for(var i in dacMobile.data.devices) {
			var d = dacMobile.data.devices[i];
			var children = d.compatList && d.compatList.length > 0;
			data.push({
				title : d.name,
				hasChild : children,
				id : d.id,
				className : 'deviceRow'
			});
		}
		
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
			if (e.rowData.id && e.rowData.hasChild)
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
				Titanium.UI.currentTab.open(win,{animated:true});
			}
		});
		
		// add table view to the window
		winServiceShops.add(tableview);
		
		tabGroup.addTab(tabHelpNow);  
		tabGroup.addTab(tabServiceShops);  
		
		// open tab group
		tabGroup.setActiveTab(1);
		tabGroup.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	}
})()
