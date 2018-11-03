<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Admin</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<base href="<?php echo asset('') ?>">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/icons.css" rel="stylesheet" type="text/css" />
	<link href="css/metismenu.min.css" rel="stylesheet" type="text/css" />
	<link href="css/style_dark.css" rel="stylesheet" type="text/css" />
	<link href="css/style.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" href="css/angular-material.min.css">
	<script src="js/modernizr.min.js"></script>
	<!-- <link rel="stylesheet" href="css/angular-material.min.css"> -->
</head>
<body>


<div ng-app="myApp" ng-controller="ShowNofi" layout-fill layout="column" class="inset" ng-cloak paddi>


    <div layout="row" layout-align="space-around">
      <div style="width:50px"></div>
      <md-button ng-click="showSimpleToast()">
        Show Simple
      </md-button>
      <md-button class="md-raised" ng-click="showActionToast()">
        Show With Action
      </md-button>
      <div style="width:50px"></div>
    </div>

    <div layout="row" id="toastBounds">

      <div>
        <p><b>Toast Position: "{{getToastPosition()}}"</b></p>
        <md-checkbox ng-repeat="(name, isSelected) in toastPosition"
          ng-model="toastPosition[name]">
          {{name}}
        </md-checkbox>
      </div>
    </div>
    <div layout="row">
      <md-button class="md-primary md-fab md-fab-bottom-right">
        FAB
      </md-button>
      <md-button class="md-accent md-fab md-fab-top-right">
        FAB
      </md-button>

    </div>
</div>

	
   <script type="text/javascript" src="js/bootstrap.js"></script>  
   <script type="text/javascript" src="js/angular-1.5.min.js"></script>  
   <script type="text/javascript" src="js/angular-animate.min.js"></script>
   <script type="text/javascript" src="js/angular-aria.min.js"></script>
   <script type="text/javascript" src="js/angular-messages.min.js"></script>
   <script type="text/javascript" src="js/angular-material.min.js"></script>
   <script type="text/javascript" src="js/functionAngular.js"></script> -->
</body>