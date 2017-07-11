var wpApp = new angular.module( 'wpAngularTheme', ['ui.router', 'ngResource'] );





wpApp.controller('InfoCtrl', ['$scope','$state', '$http', '$stateParams', function( $scope, $stateParams, $state) {
 //getting fooVal
    // var inReturn = $stateParams.inReturn; //getting barVal
    // //..
    // $scope.state = $state.current;
    // $scope.params = $stateParams; 
      $scope.UserList = $stateParams.params.userInfoUserList; 
	     $scope.UserWantList = $stateParams.params.userInfoUserWantList; 

    $scope.sendMessage = function( input ) {
      input.submit = true;
      
      // $http.post('process.php', {formData:angular.element.param(input)}).then(function(){console.log('HOLY SHIT IT SENT')});
      $http({
          method: 'POST',
          url: 'process.php',
          data: {formData:angular.element.param(input)},
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
        }
      } );
    }
 

}]);
wpApp.controller('SelectionCtrl', ['$scope', '$state', '$http', '$stateParams', function( $scope, $state, $stateParams, $http) {
	console.log('selection');
	// Posts.get('makeModel.json').success(function(data) {
	  $scope.makeModel = [{
    "type": "A - D BOX",
    "make": "ABX",
    "model": "ABX"
  },
  {
    "type": "A - D BOX",
    "make": "AGILENT",
    "model": "35900E"
  },
  {
    "type": "A - D BOX",
    "make": "Perkin Elmer",
    "model": 910
  },
  {
    "type": "A - D BOX",
    "make": "Perkin Elmer",
    "model": 970
  },
  {
    "type": "A - D BOX",
    "make": "WATERS",
    "model": "SAT/IN"
  },
  {
    "type": "ANALYZER-MICRO ARRAY",
    "make": "LUMINEX",
    "model": "LUMINEX"
  },
  {
    "type": "ANALYZER-MICRO ARRAY",
    "make": "LUMINEX",
    "model": 100
  },
  {
    "type": "ANALYZER-MICRO ARRAY",
    "make": "LUMINEX",
    "model": "LUMINEX 100 4875"
  },
  {
    "type": "ARRAYER / READER",
    "make": "AFFYMETRIX",
    "model": "GENE ARRAY SCANNER"
  },
  {
    "type": "ARRAYER / READER",
    "make": "AGILENT",
    "model": "2100 BioAnalyzer"
  },
  {
    "type": "ARRAYER / READER",
    "make": "BROOKS",
    "model": "Microarrayer HT"
  },
  {
    "type": "ARRAYER / READER",
    "make": "GENETIX",
    "model": "QARRAY"
  },
  {
    "type": "ARRAYER / READER",
    "make": "GENETIX",
    "model": "QPIX"
  },
  {
    "type": "ARRAYER / READER",
    "make": "GENOMIC SOLUTIONS",
    "model": "Flexys Robotic"
  },
  {
    "type": "ARRAYER / READER",
    "make": "GENOMIC SOLUTIONS",
    "model": "GeneTAC 1000"
  },
  {
    "type": "ARRAYER / READER",
    "make": "GENOMIC SOLUTIONS",
    "model": "GeneTac HybStation"
  },
  {
    "type": "ARRAYER / READER",
    "make": "PACKARD",
    "model": "ScanArray 3000"
  },
  {
    "type": "ARRAYER / READER",
    "make": "PACKARD",
    "model": "ScanArray 4000"
  },
  {
    "type": "ARRAYER / READER",
    "make": "MOLECULAR DEVICES",
    "model": "MOLECULAR DEVICES"
  },
  {
    "type": "ARRAYER / READER",
    "make": "BIO-RAD",
    "model": "BIO-RAD"
  },
  {
    "type": "ASE",
    "make": "Dionex",
    "model": "Dionex"
  },
  {
    "type": "ASE",
    "make": "Dionex",
    "model": 200
  },
  {
    "type": "ASE",
    "make": "Dionex",
    "model": 300
  },
  {
    "type": "AUTOCLAVE",
    "make": "AMERSHAM",
    "model": "AMERSHAM"
  },
  {
    "type": "AUTOCLAVE",
    "make": "CONSOLIDATED",
    "model": "CONSOLIDATED"
  },
  {
    "type": "AUTOCLAVE",
    "make": "CONSOLIDATED",
    "model": "SSR-3A-PB"
  },
  {
    "type": "AUTOCLAVE",
    "make": "MARKET FORGE",
    "model": "MARKET FORGE"
  },
  {
    "type": "AUTOCLAVE",
    "make": "MARKET FORGE",
    "model": "STERILMATE"
  },
  {
    "type": "AUTOCLAVE",
    "make": "MARKET FORGE",
    "model": "STERLMATIC"
  },
  {
    "type": "AUTOCLAVE",
    "make": "MARKET FORGE",
    "model": "STME"
  },
  {
    "type": "AUTOCLAVE",
    "make": "MARKET FORGE",
    "model": "STME-L"
  },
  {
    "type": "AUTOCLAVE",
    "make": "TUTTNAUER",
    "model": "TUTTNAUER"
  },
  {
    "type": "AUTOMATION WORKSTATION",
    "make": "BECKMAN COULTER",
    "model": "BIOMEK NX"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AUTOSAMPLER",
    "model": "COMBI PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AUTOSAMPLER",
    "model": "D-7770"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "1327A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": 7673
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "7673A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "7673B"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "7673C"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": 7683
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": 7694
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "7694E"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "G1313A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "G1327A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "G1329A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "G1367A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "Gerstel MPS3"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "ARCHON",
    "model": "ARCHON"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "ARCHON",
    "model": 2000
  },
  {
    "type": "AUTOSAMPLER",
    "make": "ARCHON",
    "model": 5100
  },
  {
    "type": "AUTOSAMPLER",
    "make": "BECKMAN COULTER",
    "model": "BECKMAN COULTER"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "BECKMAN COULTER",
    "model": 507
  },
  {
    "type": "AUTOSAMPLER",
    "make": "BECKMAN COULTER",
    "model": "507e"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "BECKMAN COULTER",
    "model": 508
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CETAC",
    "model": "ASX-510"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CETAC",
    "model": "ASX-520"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CT Analytic",
    "model": "A200S"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CT Analytic",
    "model": "HTS PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CT Analytic",
    "model": "PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CTC",
    "model": "CTC"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Dionex",
    "model": "Dionex"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Dionex",
    "model": "AS 3500"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Dionex",
    "model": "AS 40"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Dionex",
    "model": "AS 50"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "DYNA TECH",
    "model": "DYNA TECH"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "GERSTEL",
    "model": "MPS-2"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "GILSON",
    "model": "GILSON"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "GILSON",
    "model": 221
  },
  {
    "type": "AUTOSAMPLER",
    "make": "GILSON",
    "model": 222
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "HTA"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "200H"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "250D"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "280T"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "300A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "300L"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": "310A"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "ISCO",
    "model": "ISCO"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "ISCO",
    "model": 2700
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LACHAT\nLACHAT\nLACHAT",
    "model": "QC-8000"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "LEAP"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "A200SE"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "CTC 200"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "CTC A200"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "CTC PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "CTC PALHTC"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "OI",
    "model": "ARCHON"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "OI",
    "model": "DPM - 16"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "OI",
    "model": "MPM-16"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Perkin Elmer",
    "model": "Perkin Elmer"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "PERKIN ELMER",
    "model": 200
  },
  {
    "type": "AUTOSAMPLER",
    "make": "PERKIN ELMER",
    "model": "AS51"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Perkin Elmer",
    "model": "AS90"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Perkin Elmer",
    "model": "AS93PLUS"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Perkin Elmer",
    "model": "AUTOSYSTEM"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "PERKIN ELMER",
    "model": "HS40"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "SIEVERS",
    "model": "SIEVERS"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "SIEVERS",
    "model": 800
  },
  {
    "type": "AUTOSAMPLER",
    "make": "SPARK",
    "model": "PROSPEKT"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TEKMAR",
    "model": "TEKMAR"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TEKMAR",
    "model": "AQUATEK 70"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TEKMAR",
    "model": "AUTOcan"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TEKMAR",
    "model": "LSC 2000"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TJA",
    "model": "AS-300"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": 8100
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": 8200
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": 8400
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": 9300
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": "Archon"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": "GC 3400"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "VARIAN",
    "model": "Prostar 430"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "WATERS",
    "model": 717
  },
  {
    "type": "AUTOSAMPLER",
    "make": "Varian",
    "model": "AA 880"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CETAC",
    "model": "ASX-50O"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CETAC",
    "model": "CETAC"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "CTC",
    "model": "PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "LEAP",
    "model": "HTS PAL"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": 300
  },
  {
    "type": "AUTOSAMPLER",
    "make": "TEKMAR",
    "model": "VELOCITY XPT"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "AGILENT",
    "model": "G1888"
  },
  {
    "type": "AUTOSAMPLER",
    "make": "HTA",
    "model": 2000
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "METTLER"
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "AE100"
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "AG204"
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "AX205"
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "PR5002S"
  },
  {
    "type": "BALANCE",
    "make": "METTLER",
    "model": "UMX 2"
  },
  {
    "type": "BALANCE",
    "make": "SARTORIUS",
    "model": "SARTORIUS"
  },
  {
    "type": "BALANCE",
    "make": "SARTORIUS",
    "model": "MA100H"
  },
  {
    "type": "BALANCE",
    "make": "OHAUS",
    "model": "ADVENTURER"
  },
  {
    "type": "BIOANALYZER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "BIOANALYZER",
    "make": "AGILENT",
    "model": 2100
  },
  {
    "type": "BIOANALYZER",
    "make": "AGILENT",
    "model": "2100A"
  },
  {
    "type": "BIOANALYZER",
    "make": "AGILENT",
    "model": "2938A"
  },
  {
    "type": "CALORIMETER",
    "make": "DINESCO",
    "model": "DINESCO"
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": "PARR"
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": 1241
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": "1261  - gone"
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": 1271
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": 1281
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": "1341 EB"
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": "Oxygen Bomb"
  },
  {
    "type": "CALORIMETER",
    "make": "PARR",
    "model": "Oxygen Bomb 1341"
  },
  {
    "type": "CALORIMETER",
    "make": "PERKIN ELMER",
    "model": "DSC 6"
  },
  {
    "type": "CALORIMETER",
    "make": "PERKIN ELMER",
    "model": "DSC 7"
  },
  {
    "type": "CALORIMETER",
    "make": "PERKIN ELMER",
    "model": "PYRIS-DIAMOND"
  },
  {
    "type": "CALORIMETER",
    "make": "TA",
    "model": 2010
  },
  {
    "type": "CALORIMETER",
    "make": "TA",
    "model": 910
  },
  {
    "type": "CALORIMETER",
    "make": "TA",
    "model": "Q100"
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "AGILENT",
    "model": 1600
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "AGILENT",
    "model": 2000
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "AGILENT1600",
    "model": 1600
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "BECKMAN COULTER",
    "model": "P/ACE 2100"
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "BECKMAN COULTER",
    "model": "P/ACE MDQ"
  },
  {
    "type": "CAPILLARY ELECTROPHORESIS",
    "make": "BECKMAN COULTER",
    "model": "PA800"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "BECKMAN COULTER"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "Airfuge"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "Allegra 6R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "DCP5"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "GC-6R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "GS-6KR"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "J6M"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "JS-HS"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "L100"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "L8-70M"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "L8-80MP"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "Optima TL 100"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "Ultra"
  },
  {
    "type": "CENTRIFUGE",
    "make": "EPPENDORF",
    "model": "5415C"
  },
  {
    "type": "CENTRIFUGE",
    "make": "EPPENDORF",
    "model": "5417R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "EPPENDORF",
    "model": "5804R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "GENEVAC",
    "model": "DD4"
  },
  {
    "type": "CENTRIFUGE",
    "make": "GENEVAC",
    "model": "MEGA II 980"
  },
  {
    "type": "CENTRIFUGE",
    "make": "GENEVAC",
    "model": "MEGA-1200"
  },
  {
    "type": "CENTRIFUGE",
    "make": "HERAEUS",
    "model": "BIOFUGE PICO"
  },
  {
    "type": "CENTRIFUGE",
    "make": "HERMLE",
    "model": "Z233M"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "Centra CL3R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "CENTRAGP8"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "GP8"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "GP8P8R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "GP8R"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "MICROMAX"
  },
  {
    "type": "CENTRIFUGE",
    "make": "JOUAN",
    "model": "CR 4.22"
  },
  {
    "type": "CENTRIFUGE",
    "make": "JOUAN",
    "model": "GR 4.22"
  },
  {
    "type": "CENTRIFUGE",
    "make": "SAVANT",
    "model": "SC-110A"
  },
  {
    "type": "CENTRIFUGE",
    "make": "SAVANT",
    "model": "SC-210A"
  },
  {
    "type": "CENTRIFUGE",
    "make": "SAVANT",
    "model": "SC-250 DDA"
  },
  {
    "type": "CENTRIFUGE",
    "make": "SHANDON",
    "model": "3 Cytodentrifuge"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "Sorvall"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RC26 Plus"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RC-3C"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RC-5B"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RC-5C"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RMC-14"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RT-6000D"
  },
  {
    "type": "CENTRIFUGE",
    "make": "Sorvall",
    "model": "RT-7"
  },
  {
    "type": "CENTRIFUGE",
    "make": "IEC",
    "model": "CENTRA HN"
  },
  {
    "type": "CENTRIFUGE",
    "make": "THERMO",
    "model": "IEC"
  },
  {
    "type": "CENTRIFUGE",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "XL-A OPTIMA"
  },
  {
    "type": "CENTRIFUGE",
    "make": "SAVANT",
    "model": "SVC-200H"
  },
  {
    "type": "CENTRIFUGE",
    "make": "HERMLE",
    "model": "2216MK"
  },
  {
    "type": "CENTRIFUGE",
    "make": "BECKMAN COULTER",
    "model": "ALLEGRA 6R25R"
  },
  {
    "type": "CHEMSTATION",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "1323B"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "18594B"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": 7673
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "7673A"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "7673B"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "7673C"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "G1323B"
  },
  {
    "type": "CONTROLLER",
    "make": "AGILENT",
    "model": "G1512A"
  },
  {
    "type": "CONTROLLER",
    "make": "Perkin Elmer",
    "model": "HGA 2200"
  },
  {
    "type": "CONTROLLER",
    "make": "Perkin Elmer",
    "model": "Tac 7"
  },
  {
    "type": "CONTROLLER",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "CONTROLLER",
    "make": "WATERS",
    "model": 680
  },
  {
    "type": "CONTROLLER",
    "make": "WATERS",
    "model": "PREP LC 4000"
  },
  {
    "type": "DATA CARD",
    "make": "AGILENT",
    "model": "4100A Jet Direct"
  },
  {
    "type": "DCP",
    "make": "SPECTROSPAN",
    "model": "SPECTROSPAN"
  },
  {
    "type": "DCP",
    "make": "SPECTROSPAN",
    "model": "III"
  },
  {
    "type": "DCP",
    "make": "SPECTROSPAN",
    "model": "VI"
  },
  {
    "type": "DCP",
    "make": "TJA",
    "model": "IRIS"
  },
  {
    "type": "DEGASSER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "DEGASSER",
    "make": "AGILENT",
    "model": "1316A"
  },
  {
    "type": "DEGASSER",
    "make": "AGILENT",
    "model": "G1322A"
  },
  {
    "type": "DEGASSER",
    "make": "PERKIN ELMER",
    "model": 200
  },
  {
    "type": "DETECTOR",
    "make": "NICOLET",
    "model": "TS-3000"
  },
  {
    "type": "DETECTOR",
    "make": "OI",
    "model": "4420 ELCD"
  },
  {
    "type": "DETECTOR",
    "make": "OI",
    "model": "4430 PID"
  },
  {
    "type": "DETECTOR",
    "make": "POLYMER LABS",
    "model": "POLYMER LABS"
  },
  {
    "type": "DETECTOR",
    "make": "RADIOMATIC",
    "model": "A-525"
  },
  {
    "type": "DETECTOR",
    "make": "SEDEX",
    "model": "SEDEX"
  },
  {
    "type": "DETECTOR",
    "make": "SEDEX",
    "model": 85
  },
  {
    "type": "DETECTOR",
    "make": "WYATT",
    "model": "WYATT"
  },
  {
    "type": "DETECTOR",
    "make": "WYATT",
    "model": "MiniDawn"
  },
  {
    "type": "DETECTOR",
    "make": "WYATT",
    "model": "QELS System"
  },
  {
    "type": "DETECTOR",
    "make": "ESA",
    "model": "ESA"
  },
  {
    "type": "DETECTOR",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "DETECTOR",
    "make": "SEDEX",
    "model": "ELSD-75"
  },
  {
    "type": "DETECTOR",
    "make": "QUANT",
    "model": "QUANT"
  },
  {
    "type": "DETECTOR",
    "make": "DETECTOR",
    "model": 2475
  },
  {
    "type": "DETECTOR",
    "make": "AGILENT",
    "model": "VWD"
  },
  {
    "type": "DETECTOR",
    "make": "AGILENT",
    "model": "1315A"
  },
  {
    "type": "DETECTOR",
    "make": "QUANT",
    "model": "NQAD 600"
  },
  {
    "type": "DETECTOR",
    "make": "SHIMADZU",
    "model": "10ADVP"
  },
  {
    "type": "DETECTOR",
    "make": "SHIMADZU",
    "model": "SPD-M10AVP"
  },
  {
    "type": "DETECTOR",
    "make": "SHIMADZU",
    "model": "SPD-M1AV20"
  },
  {
    "type": "DETECTOR",
    "make": "QUANT",
    "model": "NQAD 5600"
  },
  {
    "type": "DETECTOR",
    "make": "POLYMER LABS",
    "model": 2100
  },
  {
    "type": "DETECTOR",
    "make": "OI",
    "model": 4450
  },
  {
    "type": "DETECTOR",
    "make": "QUANT",
    "model": "NQUAD"
  },
  {
    "type": "DETECTOR - ELCD",
    "make": "ESA",
    "model": "Coulochem II"
  },
  {
    "type": "DETECTOR - ELCD",
    "make": "HALL",
    "model": "HALL"
  },
  {
    "type": "DETECTOR - ELCD",
    "make": "JASCO",
    "model": "JASCO"
  },
  {
    "type": "DETECTOR - ELSD",
    "make": "SEDEX",
    "model": "SEDEX"
  },
  {
    "type": "DETECTOR - ELSD",
    "make": "SEDEX",
    "model": "85LT"
  },
  {
    "type": "DETECTOR - ELSD",
    "make": "WYATT",
    "model": "MINI-DAWN"
  },
  {
    "type": "DETECTOR - ELSD",
    "make": "POLYMER LABS",
    "model": "210O"
  },
  {
    "type": "DETECTOR - GC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "DETECTOR - GC",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "DETECTOR - GC",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "ANTEC",
    "model": 8060
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "ANTEK",
    "model": "ANTEK"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "BECKMAN COULTER",
    "model": "BECKMAN COULTER"
  },
  {
    "type": "DETECTOR - HPLC",
    "make": "QUANT",
    "model": "QT-500"
  },
  {
    "type": "DETECTOR - UPLC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "DETECTOR - UPLC",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "DETECTOR - UPLC",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "DETECTOR - UPLC",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "DIGESTION UNIT",
    "make": "CEM",
    "model": "CEM"
  },
  {
    "type": "DIGESTION UNIT",
    "make": "CEM",
    "model": "MARS 5"
  },
  {
    "type": "DIGESTION UNIT",
    "make": "CEM",
    "model": "MDS 2000"
  },
  {
    "type": "DIGESTION UNIT",
    "make": "MILESTONE",
    "model": "ETHOS 900"
  },
  {
    "type": "DIGESTION UNIT",
    "make": "BUCHI",
    "model": 425
  },
  {
    "type": "DIGESTION UNIT",
    "make": "DISTEK",
    "model": "DISTEK"
  },
  {
    "type": "DISSOLUTION",
    "make": "DISTEK",
    "model": "Evolution 6100"
  },
  {
    "type": "DISSOLUTION",
    "make": "VANKEL",
    "model": "VK7000"
  },
  {
    "type": "DNA ANALYZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "Prism 310"
  },
  {
    "type": "DNA ANALYZER",
    "make": "MOLECULAR DYNAMICS",
    "model": "MEGABACE 1000"
  },
  {
    "type": "DNA ANALYZER",
    "make": "PROTEIN TECHNOLOGIES",
    "model": "SYMPHONY"
  },
  {
    "type": "DNA ANALYZER",
    "make": "HITACHI",
    "model": "HITACHI"
  },
  {
    "type": "DNA ANALYZER",
    "make": "Genomic Solutions",
    "model": "GeneTac"
  },
  {
    "type": "DNA MICROARRAY",
    "make": "GENETIX",
    "model": "QARRAY2"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "AMERSHAM",
    "model": "MegaBACE 1000"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "AMERSHAM",
    "model": "MegaBACE 4000"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 310
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3100
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3130
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3700
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3730
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "3730XL"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "373A"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 377
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 433
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 7700
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "ABI Prism"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "BECKMAN COULTER",
    "model": "CEQ-2000"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "BECKMAN COULTER",
    "model": "CEQ-8000"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "GENETIC MICROSYSTEMS",
    "model": "GENETIC MICROSYSTEMS"
  },
  {
    "type": "DNA SEQUENCER",
    "make": "GENETIC MICROSYSTEMS",
    "model": 417
  },
  {
    "type": "DNA SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3100
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "3730XL"
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 3900
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "392/394"
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 394
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "431A"
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 8909
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "APPLIED BIOSYSTEMS",
    "model": 9600
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "DNA SYNTHESIZER",
    "model": "TETRAS"
  },
  {
    "type": "DNA SYNTHESIZER",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "DNA THERMOCYCLER",
    "make": "PERKIN ELMER",
    "model": 9600
  },
  {
    "type": "DSC",
    "make": "METTLER",
    "model": "METTLER"
  },
  {
    "type": "DSC",
    "make": "METTLER",
    "model": "DSC820"
  },
  {
    "type": "DSC",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "DSC-2"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "DSC-4"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "DSC-6"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "DSC-7"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "PYRIS 1"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "Pyris 6"
  },
  {
    "type": "DSC",
    "make": "Perkin Elmer",
    "model": "TGS-2"
  },
  {
    "type": "DSC",
    "make": "SEIKO/PE",
    "model": "DSC220C"
  },
  {
    "type": "DSC",
    "make": "SEIKO/PE",
    "model": "SAPHIRE DSC6000"
  },
  {
    "type": "DSC",
    "make": "TA",
    "model": "TA"
  },
  {
    "type": "DSC",
    "make": "TA",
    "model": "Q10"
  },
  {
    "type": "DSC",
    "make": "Thermo",
    "model": "Thermo"
  },
  {
    "type": "DSC",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "DSC / DMA",
    "make": "SEIKO",
    "model": "SEIKO"
  },
  {
    "type": "DSC / TGA",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "DSC / TGA",
    "make": "TA",
    "model": "TA"
  },
  {
    "type": "DUROMETER",
    "make": "HITACHI",
    "model": 600
  },
  {
    "type": "ELECTRONIC NOSE",
    "make": "ALPHA MOS",
    "model": "HS-100"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "AGILENT",
    "model": "CE-3D"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "CE 270A - HT"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "BECKMAN COULTER",
    "model": "PACE 5000"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "BIO-RAD",
    "model": "Cheff Mapper"
  },
  {
    "type": "ELECTROPHORESIS",
    "make": "BIO-RAD",
    "model": "Cheff Mapper DRII"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECKMAN COULTER",
    "model": "EPICS XL FACS"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "BECTON DICKENSON"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "FACS"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "FACS Calibur"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "FACscan"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "FACSort"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BENTON",
    "model": "BENTON"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "LUMINEX",
    "model": "LUMINEX"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "LUMINEX",
    "model": 100
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECKMAN COULTER",
    "model": "FC500"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "MOFLO"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "DIONEX",
    "model": "FC500"
  },
  {
    "type": "FLOW CYTOMETER",
    "make": "BECTON DICKENSON",
    "model": "FACSVANTAGE"
  },
  {
    "type": "FLOW METER",
    "make": "AGILENT",
    "model": "HFM 1000"
  },
  {
    "type": "FLOW METER",
    "make": "ALLTECH",
    "model": "ALLTECH"
  },
  {
    "type": "FLOW METER",
    "make": "COULTER",
    "model": "EPICS Elite"
  },
  {
    "type": "FLOW METER",
    "make": "SHIMADZU",
    "model": "CFT-500"
  },
  {
    "type": "FLOW METER",
    "make": "RADIOMATIC",
    "model": "150TR"
  },
  {
    "type": "FLOW SCINTILLATOIN COUNTER",
    "make": "AMERSHAM",
    "model": "AMERSHAM"
  },
  {
    "type": "FPLC",
    "make": "AKTA",
    "model": "10 EXPLORER"
  },
  {
    "type": "FPLC",
    "make": "AKTA",
    "model": "AKTA"
  },
  {
    "type": "FPLC",
    "make": "AKTA",
    "model": "PHARMACIA"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA 100"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA EXPLORER 100"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA FRAC-920"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA FRAC-950"
  },
  {
    "type": "FPLC",
    "make": "PHARMACIA",
    "model": "PHARMACIA"
  },
  {
    "type": "FPLC",
    "make": "GE HEALTH CARE",
    "model": "AKTA EXPLORER10"
  },
  {
    "type": "FPLC",
    "make": "AMERSHAM",
    "model": "AKTA EXPLORER 10"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "AGILENT",
    "model": 220
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "DIONEX",
    "model": "DIONEX"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "GILSON",
    "model": "GILSON"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "GILSON",
    "model": 215
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "GILSON",
    "model": "F203"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "GILSON",
    "model": "FC203B"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "GILSON",
    "model": "FC204"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "PERCEPTIVE BIOSYSTEMS",
    "model": "BioCAD 250"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "WATERS",
    "model": "II"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "AGILENT",
    "model": "G1364B"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "AGILENT",
    "model": "G1364A"
  },
  {
    "type": "FRACTION COLLECTOR",
    "make": "AKTA",
    "model": "AKTA"
  },
  {
    "type": "FTIR",
    "make": "MATTSON",
    "model": "MATTSON"
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": 2000
  },
  {
    "type": "FTIR",
    "make": "BIO-RAD",
    "model": "BIO-RAD"
  },
  {
    "type": "FTIR",
    "make": "BIO-RAD",
    "model": "175C"
  },
  {
    "type": "FTIR",
    "make": "MATTSON",
    "model": "Genesis"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "NICOLET"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "60 SX"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": 800
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "Magna-IR 560"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "Magna-IR 750 Series II"
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": 1310
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": 1600
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": 1700
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": 5100
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": "Spectrum BX"
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": "SPECTRUM ONE"
  },
  {
    "type": "FTIR",
    "make": "PERKIN ELMER",
    "model": "SPECTRUM100"
  },
  {
    "type": "FTIR",
    "make": "SCINCO",
    "model": "S-3100"
  },
  {
    "type": "FTIR",
    "make": "SPEKAC",
    "model": "MK 2 Diamond"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "ECO-1000S"
  },
  {
    "type": "FTIR",
    "make": "BRUKER",
    "model": "BRUKER"
  },
  {
    "type": "FTIR",
    "make": "SHIMADZU",
    "model": "8400S"
  },
  {
    "type": "FTIR",
    "make": "BRUKER",
    "model": "ALPHA"
  },
  {
    "type": "FTIR",
    "make": "NICOLET",
    "model": "NEXUS 670"
  },
  {
    "type": "FTIR",
    "make": "VARIAN",
    "model": 6410
  },
  {
    "type": "FTIR",
    "make": "THERMO",
    "model": 670
  },
  {
    "type": "GC",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": "5890 II"
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": 6850
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": "6890A"
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": "6890N"
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": 7890
  },
  {
    "type": "GC",
    "make": "AGILENT",
    "model": "MICRO"
  },
  {
    "type": "GC",
    "make": "DIONEX",
    "model": "DIONEX"
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": 8000
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": 8500
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": "AUTOSYSTEM"
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": "AUTOSYSTEM XL"
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": "CLARUS 500"
  },
  {
    "type": "GC",
    "make": "PERKIN ELMER",
    "model": "Sigma 300"
  },
  {
    "type": "GC",
    "make": "SHIMADZU",
    "model": "14 A"
  },
  {
    "type": "GC",
    "make": "SHIMADZU",
    "model": 2010
  },
  {
    "type": "GC",
    "make": "SHIMADZU",
    "model": 2014
  },
  {
    "type": "GC",
    "make": "SHIMADZU",
    "model": "GC-15A"
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3300
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3400
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": "3400 CX"
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": "3400 STAR"
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3500
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3600
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": "3600CX"
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3700
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3800
  },
  {
    "type": "GC",
    "make": "VARIAN",
    "model": 3900
  },
  {
    "type": "GC",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "GCMS",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "GCMS",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "GCMS",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "GCMS",
    "make": "SHIMADZU",
    "model": "17A / QP500"
  },
  {
    "type": "GCMS",
    "make": "SHIMADZU",
    "model": "17A / QP5000"
  },
  {
    "type": "GCMS",
    "make": "SHIMADZU",
    "model": 2010
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5972/5890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5972/6890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5973/6850"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5973/6890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5973/7890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5975/6850"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5975/6890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5975/6890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5977/6890"
  },
  {
    "type": "GCMS",
    "make": "AGILENT",
    "model": "5977/7890"
  },
  {
    "type": "GCMS",
    "make": "PERKIN ELMER",
    "model": "AUTOSYSTEM"
  },
  {
    "type": "GCMS",
    "make": "PERKIN ELMER",
    "model": "CLARUS 600"
  },
  {
    "type": "GCMS",
    "make": "SHIMADZU",
    "model": "QP5000"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "SATURN"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "SATURN 2"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "SATURN 2000"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "SATURN 2002"
  },
  {
    "type": "GCMS",
    "make": "VARIAN",
    "model": "SATURN 3"
  },
  {
    "type": "GCMSMS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "GCMSMS",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "GCMSMS",
    "make": "THERMO",
    "model": "TSQ7000"
  },
  {
    "type": "GCMSMS",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "GCMSMS",
    "make": "LECO",
    "model": "Pegasus III"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "Balston-Whatman",
    "model": "H2-500NA"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "Balston-Whatman",
    "model": "H2-800NA"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PACKARD",
    "model": "PACKARD"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PACKARD",
    "model": 9100
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PD"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "GCGS-7890NA"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PEM-165"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PEM-260"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2-800NA"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PEM-510"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "PARKER BALSTON"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PEM-100"
  },
  {
    "type": "GENERATOR - HYDROGEN",
    "make": "PARKER BALSTON",
    "model": "H2PD-300"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "PARKER BALSTON"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "AGS500"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "UHPN2"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "N2-14"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "-",
    "model": "LCMS 5000 NA"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "-",
    "model": "N2"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "DOMNICK HUNTER",
    "model": "NITROX UHPLCMS 18W"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PEAK",
    "model": "NM20Z"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "N2-45"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "N2-04"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "DOMNICK HUNTER",
    "model": "DOMNICK HUNTER"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "NITROFLOW LAB"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "AGS600"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PEAK",
    "model": "NM32LA"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PEAK",
    "model": "GENIUS3020"
  },
  {
    "type": "GENERATOR - NITROGEN",
    "make": "PARKER BALSTON",
    "model": "TG2NA"
  },
  {
    "type": "Generator - TOC",
    "make": "PEAK",
    "model": "TOC1500"
  },
  {
    "type": "Generator - TOC",
    "make": "PARKER BALSTON",
    "model": "HPZA-18000"
  },
  {
    "type": "GENERATOR - ZERO AIR",
    "make": "PARKER BALSTON",
    "model": "HPZA-3500"
  },
  {
    "type": "GENERATOR - ZERO AIR",
    "make": "PARKER BALSTON",
    "model": "PARKER BALSTON"
  },
  {
    "type": "GENERATOR - ZERO AIR",
    "make": "PARKER BALSTON",
    "model": "PARKER BALSTON"
  },
  {
    "type": "GENERATOR - ZERO AIR",
    "make": "PARKER BALSTON",
    "model": "LCMS-5000"
  },
  {
    "type": "GPC",
    "make": "POLYMER LABS",
    "model": "POLYMER LABS"
  },
  {
    "type": "GPC",
    "make": "Varian",
    "model": "Varian"
  },
  {
    "type": "GPC",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "GPC",
    "make": "AGILENT",
    "model": "PL-GPC 220"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "AGILENT",
    "model": 1888
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "AGILENT",
    "model": 7694
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "AGILENT",
    "model": "7694E"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "CTC",
    "model": "PAL"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "HTA"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "250D"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "280T"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "HT200"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "HT200H"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "HTA",
    "model": "HT3000"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "HEADSPACE SAMPLER",
    "make": "PERKIN ELMER",
    "model": "H540"
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1200
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": "G1364A"
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1000
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1050
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1100
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1260
  },
  {
    "type": "HPLC",
    "make": "AGILENT",
    "model": 1290
  },
  {
    "type": "HPLC",
    "make": "AKTA",
    "model": "AKTA"
  },
  {
    "type": "HPLC",
    "make": "AKTA",
    "model": "EXPLORER 10"
  },
  {
    "type": "HPLC",
    "make": "AKTA",
    "model": "EXPLORER 100"
  },
  {
    "type": "HPLC",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "HPLC",
    "make": "GE",
    "model": "GE"
  },
  {
    "type": "HPLC",
    "make": "GILSON",
    "model": "GILSON"
  },
  {
    "type": "HPLC",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "HPLC",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "HPLC",
    "make": "SHIMADZU",
    "model": "10 Series"
  },
  {
    "type": "HPLC",
    "make": "SHIMADZU",
    "model": "20 Series"
  },
  {
    "type": "HPLC",
    "make": "Shimadzu",
    "model": "NEXERA"
  },
  {
    "type": "HPLC",
    "make": "THERMO COHESIVE",
    "model": "THERMO COHESIVE"
  },
  {
    "type": "HPLC",
    "make": "Varian",
    "model": "Varian"
  },
  {
    "type": "HPLC",
    "make": "Varian",
    "model": "PREPSTAR 218"
  },
  {
    "type": "HPLC",
    "make": "Varian",
    "model": "PROSTAR"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "Alliance"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "Acquity"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": 2690
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": 2695
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "2695XE"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": 2790
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": 2795
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": 600
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "600E"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "CapLC"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "CapLC XE"
  },
  {
    "type": "HPLC",
    "make": "WATERS",
    "model": "Delta Prep"
  },
  {
    "type": "IC",
    "make": "DIONEX",
    "model": "DIONEX"
  },
  {
    "type": "IC",
    "make": "LACHAT",
    "model": "LACHAT"
  },
  {
    "type": "ICP",
    "make": "Spectro",
    "model": "EOP"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "4300DV"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3200DV"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "5330V OPTIMA"
  },
  {
    "type": "ICP",
    "make": "LEEMAN",
    "model": "LEEMAN"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 2000
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 3000
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "3000XL"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 3100
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 3300
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 4000
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 4300
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 6000
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "6100 DRC"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": 6500
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "ELAN 6100"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 2000"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 2000DV"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3000"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3000 XL"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3000DV"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3300DV"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA 3300XL"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "OPTIMA2000"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "P40"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "P400"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER",
    "model": "Plasma 400"
  },
  {
    "type": "ICP",
    "make": "PERKIN ELMER|",
    "model": "3000XL"
  },
  {
    "type": "ICP",
    "make": "Spectro",
    "model": "Spectro"
  },
  {
    "type": "ICP",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "ICP",
    "make": "THERMO",
    "model": "61E trace"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "TJA"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "61 E"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "61 E POLYSCAN"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "61 E TRACE"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": 9000
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "ATOMSCAN 16"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "ENVIRO II (ICAP)"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "IRIS"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "IRIS - INTREPID"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "IRIS - ADVANTAGE"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "IRIS DCP"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "Plasma 300"
  },
  {
    "type": "ICP",
    "make": "TJA",
    "model": "Pollyscan II"
  },
  {
    "type": "ICP",
    "make": "Varian",
    "model": "Varian"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7500A"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": 4500
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "4500 PLUS"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": 7500
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7500i"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7500S"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": 7500
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7700X"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": 7700
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7500CX"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7700E"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7500CE"
  },
  {
    "type": "ICPMS",
    "make": "AGILENT",
    "model": "7900X"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "ELAN 9000"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": 4500
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "6100 DRC PLUS"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "DRC PLUS"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "ELAN 5000"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "ELAN 6000"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "ELAN 6100"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "DRC-E"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "PE NEXIUM X"
  },
  {
    "type": "ICPMS",
    "make": "PERKIN ELMER",
    "model": "6100 DRC"
  },
  {
    "type": "ICPMS",
    "make": "THERMO FINNIGAN",
    "model": "VG PlasmaQuad 3"
  },
  {
    "type": "ICPMS",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "ICPMS",
    "make": "VARIAN",
    "model": "S700"
  },
  {
    "type": "ICPMS",
    "make": "VARIAN",
    "model": "SATURN II"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "IMAGING SCANNER",
    "model": "Bio Scan System 200"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "AMERSHAM",
    "model": "STORM 860"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "AMERSHAM",
    "model": "TYPHOON 9400"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "AMERSHAM",
    "model": "TYPHOON 9410"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "AMERSHAM",
    "model": "TYPHOON 8600"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "HITACHI",
    "model": "FM-Bio"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "HITACHI",
    "model": "FM-BIO II"
  },
  {
    "type": "IMAGING SCANNER",
    "make": "IMAGING SCANNER",
    "model": "BOD"
  },
  {
    "type": "INCUBATOR",
    "make": "FORMA SCIENTIFIC",
    "model": "FORMA SCIENTIFIC"
  },
  {
    "type": "INCUBATOR",
    "make": "FORMA SCIENTIFIC",
    "model": 3919
  },
  {
    "type": "INCUBATOR",
    "make": "HERAEUS",
    "model": "UTP12P"
  },
  {
    "type": "INCUBATOR",
    "make": "LABCONCO",
    "model": "LABCONCO"
  },
  {
    "type": "INCUBATOR",
    "make": "PRECISION",
    "model": "PRECISION"
  },
  {
    "type": "INCUBATOR",
    "make": "PRECISION",
    "model": 815
  },
  {
    "type": "INCUBATOR",
    "make": "THERMO",
    "model": "370 Steri Cycle"
  },
  {
    "type": "INCUBATOR",
    "make": "VWR",
    "model": "VWR"
  },
  {
    "type": "INCUBATOR",
    "make": "VWR",
    "model": 1545
  },
  {
    "type": "INCUBATOR",
    "make": "VWR",
    "model": 2020
  },
  {
    "type": "INCUBATOR",
    "make": "VWR",
    "model": 2030
  },
  {
    "type": "INTEGRATOR",
    "make": "AGILENT",
    "model": "3392 A"
  },
  {
    "type": "INTEGRATOR",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "INTERFACE BOXES",
    "make": "AGILENT",
    "model": "jet and HPIB"
  },
  {
    "type": "INTERFACE BOXES",
    "make": "WATERS",
    "model": "SAT/IM"
  },
  {
    "type": "ION TRAP MS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "ION TRAP MS",
    "make": "AGILENT",
    "model": 6300
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 3200 Qtrap"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 4000 Qtrap"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 5500 Qtrap"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 4500 Qtrap"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 6500 Qtrap"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 6500 Qtrap Plus"
  },
  {
    "type": "ION TRAP MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "ION TRAP MS",
    "make": "BRUKER",
    "model": "BRUKER"
  },
  {
    "type": "ION TRAP MS",
    "make": "BRUKER",
    "model": "Amazon SL"
  },
  {
    "type": "ION TRAP MS",
    "make": "BRUKER",
    "model": "Amazon Speed"
  },
  {
    "type": "ION TRAP MS",
    "make": "BRUKER",
    "model": "Amazon Speed ETD"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP ELITE"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP XL"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "LCQ FLEET"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "LTQ ORBITRAP"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "LTQ XL"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "LTQ VELOS"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "LTQ VELOS PRO"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "Q-EXACTIVE ELITE"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP FUSION"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "ORBITRAP FUSION LUMOS"
  },
  {
    "type": "ION TRAP MS",
    "make": "THERMO",
    "model": "EXACTIVE"
  },
  {
    "type": "LCMS",
    "make": "THERMO",
    "model": "MSQ Plus"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "G1956B"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "G1946D"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "G6120B"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": 6130
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": 6120
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "6130B"
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": 6150
  },
  {
    "type": "LCMS",
    "make": "AGILENT",
    "model": "G1946A"
  },
  {
    "type": "LCMS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "LCMS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "150 EX"
  },
  {
    "type": "LCMS",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "Acquity SQD"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "Acquity QDA"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "ZMD 4000"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "ZQ"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "ZQ 2000"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "ZMD 2000"
  },
  {
    "type": "LCMS",
    "make": "WATERS",
    "model": "ZQ 4000"
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6410
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6430
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6490
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6420
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6495
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6470
  },
  {
    "type": "LC/MS/MS",
    "make": "AGILENT",
    "model": 6460
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 5500"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 3200"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 2000"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 3000"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 4000"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 5000"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 5600"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 6500"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 4500"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 5500"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 3500"
  },
  {
    "type": "LC/MS/MS",
    "make": "APPLIED BIOSYSTEMS",
    "model": "API 6500 Plus"
  },
  {
    "type": "LC/MS/MS",
    "make": "BRUKER",
    "model": "BRUKER"
  },
  {
    "type": "LC/MS/MS",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "LC/MS/MS",
    "make": "SHIMADZU",
    "model": 8050
  },
  {
    "type": "LC/MS/MS",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "LC/MS/MS",
    "make": "SHIMADZU",
    "model": 8030
  },
  {
    "type": "LC/MS/MS",
    "make": "SHIMADZU",
    "model": 8060
  },
  {
    "type": "LC/MS/MS",
    "make": "SHIMADZU",
    "model": 8040
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "TSQ Vantage"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "TSQ Quantum"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "TSQ Quantum Access"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "TSQ Endura"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "TSQ Quantiva"
  },
  {
    "type": "LC/MS/MS",
    "make": "THERMO",
    "model": "Quantum Ultra"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "QUATTRO ULTIMA"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "QUATTRO ULTIMA 4000"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "Acquity TQD"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "Xevo TQ MS"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "Xevo TQ-S"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "Xevo TQD"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "Xevo TQ-S Micro"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "QUATRO PREMIER XE"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "QUATTRO II"
  },
  {
    "type": "LC/MS/MS",
    "make": "WATERS",
    "model": "QUATTRO MICRO"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "BIOTEK",
    "model": "BIOTEK"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "HAMILTON",
    "model": "HAMILTON"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "TECAN",
    "model": "TECAN"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "BIOMEK",
    "model": "BIOMEK"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "TOMTEC",
    "model": "TOMTEC"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "ZYMARK",
    "model": "ZYMARK"
  },
  {
    "type": "LIQUID HANDLER",
    "make": "TECAN",
    "model": "EVO 200"
  },
  {
    "type": "MAGNETIC SECTOR",
    "make": "APPLIED BIOSYSTEMS",
    "model": 4700
  },
  {
    "type": "MAGNETIC SECTOR",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "MALDI-TOF",
    "make": "AB SCIEX",
    "model": "AB SCIEX"
  },
  {
    "type": "MALDI-TOF",
    "make": "AB SCIEX",
    "model": "4800 TOF/TOF"
  },
  {
    "type": "MALDI-TOF",
    "make": "AB SCIEX",
    "model": "5800 TOF/TOF"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "AUTOFLEX"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "MALDI TDS"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "MALDI-FTMS"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "EASY NLC"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "MICROFLEX LT"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "MICROFLEX LRF"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "AUTOFLEEX SPEED"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "ULTRAFLEX X-TREME"
  },
  {
    "type": "MALDI-TOF",
    "make": "BRUKER",
    "model": "MALDI PHAMAPULSE"
  },
  {
    "type": "MALDI-TOF",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "MALDI-TOF",
    "make": "WATERS",
    "model": "MALDI QTOF PREMIER"
  },
  {
    "type": "MALDI-TOF",
    "make": "WATERS",
    "model": "MADLDI SYNAPT HDMS"
  },
  {
    "type": "MALDI-TOF",
    "make": "WATERS",
    "model": "MALDI SYNAPPT G2-SI"
  },
  {
    "type": "MAPPER",
    "make": "BIO-RAD",
    "model": "ACCENT QS-312"
  },
  {
    "type": "MICROPLATE READER",
    "make": "AMERSHAM",
    "model": "TYPHOON 8600"
  },
  {
    "type": "MICROPLATE READER",
    "make": "BMG",
    "model": "POLARSTAR"
  },
  {
    "type": "MICROPLATE READER",
    "make": "LABSYSTEMS",
    "model": "LUMINOSKAN RS"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICES",
    "model": "1536 ULTRA-HTS"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICES",
    "model": "ANALYST AD"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICES",
    "model": "FLIPR-3"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICES",
    "model": "SPECTROMAX"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICES",
    "model": "VERSAMAX"
  },
  {
    "type": "MICROPLATE READER",
    "make": "MOLECULAR DEVICESSPECTROMAX",
    "model": "SPECTROMAX"
  },
  {
    "type": "MICROPLATE READER",
    "make": "PACKARD",
    "model": "lUMIcOUNT"
  },
  {
    "type": "MICROPLATE READER",
    "make": "PERKIN ELMER",
    "model": "FUSION-ALPHA-FP"
  },
  {
    "type": "MICROPLATE READER",
    "make": "PERKIN ELMER",
    "model": "VIEWLUX ULTRAHTS"
  },
  {
    "type": "MICROPLATE READER",
    "make": "TECAN",
    "model": "SPECTRA"
  },
  {
    "type": "MICROPLATE READER",
    "make": "TECAN",
    "model": "SUNRISE"
  },
  {
    "type": "MICROPLATE READER",
    "make": "TITERTEK",
    "model": "TITERTEK"
  },
  {
    "type": "MICROPLATE READER",
    "make": "TITERTEK",
    "model": "MULTISCAN"
  },
  {
    "type": "MICROPLATE READER",
    "make": "WALLAC",
    "model": "VICTOR 2"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "BIO-RAD",
    "model": "IMMUNOWASH 1575"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "BIOTEK",
    "model": "EL-311"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "BIOTEK",
    "model": "ELP-40"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "TECAN",
    "model": "96PW"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "THERMO LABSYSTEMS",
    "model": "WELLWASH"
  },
  {
    "type": "MICROPLATE WASHER",
    "make": "PHILIPS",
    "model": "CM-12-TEM"
  },
  {
    "type": "MICROSCOPE",
    "make": "NICOLET",
    "model": "NICOLET"
  },
  {
    "type": "MICROSCOPE",
    "make": "OLYMPUS",
    "model": "OLYMPUS"
  },
  {
    "type": "MICROSCOPE",
    "make": "NICOLET",
    "model": "NICOLET"
  },
  {
    "type": "MICROSCOPE",
    "make": "NIKON",
    "model": "NIKON"
  },
  {
    "type": "MICROSCOPE",
    "make": "ZEISS",
    "model": "ZEISS"
  },
  {
    "type": "MRI",
    "make": "GE HEALTH CARE",
    "model": "GE HEALTH CARE"
  },
  {
    "type": "MRI",
    "make": "THERMO FINNIGAN",
    "model": "ORBITRAP"
  },
  {
    "type": "NMR",
    "make": "OXFORD",
    "model": "OXFORD"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "400MHZ"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "500MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "600MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "500MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "BRUKER"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "400MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "AVANCE-600MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "MSL 200"
  },
  {
    "type": "NMR",
    "make": "OXFORD",
    "model": "QP20"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "VARIAN"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "300MHZ"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "600MHZ"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "INOVA"
  },
  {
    "type": "NMR",
    "make": "VARIAN",
    "model": "Inova 500MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "700MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "AVANCE II"
  },
  {
    "type": "NMR",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "800MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "300MHZ"
  },
  {
    "type": "NMR",
    "make": "BRUKER",
    "model": "600MHZ"
  },
  {
    "type": "NMR",
    "make": "AGILENT",
    "model": "500MHZ"
  },
  {
    "type": "NMR",
    "make": "JEOL",
    "model": "ECX400"
  },
  {
    "type": "NMR",
    "make": "OXFORD",
    "model": "800MHZ"
  },
  {
    "type": "NQAD",
    "make": "QUANT",
    "model": "QT-600"
  },
  {
    "type": "NQAD",
    "make": "QUANT",
    "model": 5600
  },
  {
    "type": "OLIGO SEQUENCERS",
    "make": "AMERSHAM",
    "model": "OLIGO PILOT"
  },
  {
    "type": "OLIGOSYNTHESIZER",
    "make": "GENOMIC SOLUTIONS",
    "model": "POLYPLEX"
  },
  {
    "type": "PARTICLE COUNTER",
    "make": "MICROTRAC",
    "model": "MICROTRAC"
  },
  {
    "type": "PARTICLE COUNTER",
    "make": "BECKMAN COULTER",
    "model": "BECKMAN COULTER"
  },
  {
    "type": "PCR",
    "make": "PERKIN ELMER",
    "model": 9600
  },
  {
    "type": "PCR",
    "make": "ROCHE",
    "model": "ROCHE"
  },
  {
    "type": "PURGE AND TRAP",
    "make": "TEKMAR",
    "model": "TEKMAR"
  },
  {
    "type": "PURGE AND TRAP",
    "make": "OI",
    "model": "OI"
  },
  {
    "type": "PURGE AND TRAP",
    "make": "ISCO",
    "model": "COMBI FLASH"
  },
  {
    "type": "PURIFIER",
    "make": "ISCO",
    "model": "COMBI COMPANION"
  },
  {
    "type": "PURIFIER",
    "make": "AKTA",
    "model": "AKTA"
  },
  {
    "type": "SEM",
    "make": "AMR",
    "model": "AMR"
  },
  {
    "type": "SEM",
    "make": "JEOL",
    "model": "JEOL"
  },
  {
    "type": "SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "3130 XL"
  },
  {
    "type": "SEQUENCER",
    "make": "AMERSHAM",
    "model": "MegaBACE 1000"
  },
  {
    "type": "SEQUENCER",
    "make": "AMERSHAM",
    "model": "MegaBACE 4000"
  },
  {
    "type": "SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "APPLIED BIOSYSTEMS"
  },
  {
    "type": "SEQUENCER",
    "make": "APPLIED BIOSYSTEMS",
    "model": "PROCISE 494"
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "SHIMADZU",
    "model": "SHIMADZU"
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "AGILENT",
    "model": 8452
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "AGILENT",
    "model": 8453
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "BECKMAN COULTER",
    "model": "BECKMAN COULTER"
  },
  {
    "type": "SPECTROPHOTOMETER",
    "make": "THERMO",
    "model": "THERMO"
  },
  {
    "type": "TGA",
    "make": "PERKIN ELMER",
    "model": "Pyris 6"
  },
  {
    "type": "TGA",
    "make": "PERKIN ELMER",
    "model": "TGA-7"
  },
  {
    "type": "TGA",
    "make": "TA",
    "model": "TA"
  },
  {
    "type": "TGA",
    "make": "TA",
    "model": 2950
  },
  {
    "type": "TGA",
    "make": "TA",
    "model": 951
  },
  {
    "type": "TGA",
    "make": "TA",
    "model": "Q50"
  },
  {
    "type": "TGA / DMA",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "TGA / DMA",
    "make": "PERKIN ELMER",
    "model": 7
  },
  {
    "type": "TGA / DMA",
    "make": "PERKIN ELMER",
    "model": "TGA-7/DSC-7/DMA-7"
  },
  {
    "type": "TGA / DTA",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "TITRATOR",
    "make": "TITRATOR",
    "model": "DL35"
  },
  {
    "type": "TITRATOR",
    "make": "BRINKMANN",
    "model": "BRINKMANN"
  },
  {
    "type": "TITRATOR",
    "make": "BRINKMANN",
    "model": 702
  },
  {
    "type": "TITRATOR",
    "make": "HACH",
    "model": "HACH"
  },
  {
    "type": "TITRATOR",
    "make": "HAWKE",
    "model": "HAWKE"
  },
  {
    "type": "TITRATOR",
    "make": "KARL FISCHER",
    "model": "KARL FISCHER"
  },
  {
    "type": "TITRATOR",
    "make": "KARL FISCHER",
    "model": "DL18"
  },
  {
    "type": "TITRATOR",
    "make": "KARL FISCHER",
    "model": "DL31"
  },
  {
    "type": "TITRATOR",
    "make": "KARL FISCHER",
    "model": "DL70"
  },
  {
    "type": "TITRATOR",
    "make": "MANDEL SCIENTIFIC",
    "model": "MANDEL SCIENTIFIC"
  },
  {
    "type": "TITRATOR",
    "make": "METROHM AG",
    "model": "METROHM AG"
  },
  {
    "type": "TITRATOR",
    "make": "METTLER",
    "model": "DC12"
  },
  {
    "type": "TOC",
    "make": "DOHRMANN",
    "model": "DOHRMANN"
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": 5000
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": "5000A"
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": 5050
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": "5050A"
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": "6000A"
  },
  {
    "type": "TOC",
    "make": "SHIMADZU",
    "model": "V SERIES"
  },
  {
    "type": "TOC",
    "make": "TEKMAR",
    "model": "DC-180"
  },
  {
    "type": "TOC",
    "make": "TEKMAR",
    "model": "DC-80"
  },
  {
    "type": "TOC",
    "make": "TEKMAR",
    "model": "PHOENIX"
  },
  {
    "type": "TOF MS",
    "make": "BRUKER",
    "model": "ULTRA TOF MS"
  },
  {
    "type": "TOF MS",
    "make": "BRUKER",
    "model": "MAXIS"
  },
  {
    "type": "TOF MS",
    "make": "BRUKER",
    "model": "MICROTOF II"
  },
  {
    "type": "TOF MS",
    "make": "AB SCIEX",
    "model": "AB SCIEX"
  },
  {
    "type": "TOF MS",
    "make": "AB SCIEX",
    "model": "QSTAR ELITE"
  },
  {
    "type": "TOF MS",
    "make": "AB SCIEX",
    "model": "TRIPLE TOF 5600 PLUS"
  },
  {
    "type": "TOF MS",
    "make": "AB SCIEX",
    "model": "TRIPLE TOF 4600"
  },
  {
    "type": "TOF MS",
    "make": "AB SCIEX",
    "model": "TRIPLE TOF 6600"
  },
  {
    "type": "TOF MS",
    "make": "WATERS",
    "model": "WATERS"
  },
  {
    "type": "TOF MS",
    "make": "WATERS",
    "model": "LCT PREMIER XE"
  },
  {
    "type": "TOF MS",
    "make": "WATERS",
    "model": "XEVO G2-S"
  },
  {
    "type": "TOF MS",
    "make": "WATERS",
    "model": "XEVO G2-XS"
  },
  {
    "type": "TOF MS",
    "make": "WATERS",
    "model": "X 500 R"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "AGILENT"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6000 TOF"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6210 TOF"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6500 TOF"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6230 TOF"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6560 TOF"
  },
  {
    "type": "TOF MS",
    "make": "AGILENT",
    "model": "6545 TOF"
  },
  {
    "type": "TURBOVAP",
    "make": "ZYMARK",
    "model": "ZYMARK"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "PERKIN ELMER"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "LAMBDA 3"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "LAMBDA 9"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "LAMBDA 900"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "LAMBDA 35"
  },
  {
    "type": "UV / VIS",
    "make": "PERKIN ELMER",
    "model": "LAMBDA1050"
  },
  {
    "type": "XRD",
    "make": "SIEMENS",
    "model": "D-500"
  },
  {
    "type": "XRD",
    "make": "SIEMENS",
    "model": "D-5000"
  },
  {
    "type": "XRD",
    "make": "RIGAKU",
    "model": "RIGAKU"
  },
  {
    "type": "XRD",
    "make": "RIGAKU",
    "model": "D/Max-2200V"
  },
  {
    "type": "XRD",
    "make": "RIGAKU",
    "model": "D/Max-IIIB"
  },
  {
    "type": "XRD",
    "make": "SIEMENS",
    "model": "SIEMENS"
  }];
	  $scope.makes=[];
	  $scope.models=[];
	  $scope.years=[];
	  $scope.types=[];
	  $scope.userList=[];
	  $scope.userWantList=[];
	  $scope.selectedModel;
	  $scope.selectedMake;
	  $scope.newItemAdded=true;
	  $scope.AddItemShouldShow=false;
	  $scope.UserWant;
    $scope.removeButtonShouldShow="false";
    $scope.removedItem;
    $scope.removeUserList=[];

	  	  	  //this imports the types
	var allTypes=[];
	for(var i=0;i<$scope.makeModel.length;i++){
		allTypes.push($scope.makeModel[i].type);
	}

		$scope.types=unique(allTypes);
	$scope.updateType=function(typeselected) {
		console.log(typeselected);
		$scope.thisType=typeselected;
		$scope.makes=[];

		for(i=0;i<$scope.makeModel.length;i++){
			
			if($scope.makeModel[i].type===typeselected)	{
				console.log($scope.makes);
				$scope.makes.push($scope.makeModel[i].make);
				}
			$scope.makes=unique($scope.makes);
		  	console.log($scope.makes);
		}
	};

	 	function unique(someArray) {
	    var o = {}, i, l = someArray.length, r = [];
	    for(i=0; i<l;i+=1) {o[someArray[i]] = someArray[i];}
	    for(i in o) {r.push(o[i]);}
	    return r;
	}

		//updates the models in the array
	$scope.updateMake=function(makeselected) {
		console.log(makeselected);
		$scope.selectedMake=makeselected;
		$scope.models=[];

		for(i=0;i<$scope.makeModel.length;i++){
			
			if($scope.makeModel[i].make===makeselected)	{
				console.log($scope.models);
				$scope.models.push($scope.makeModel[i].model);
			}

		}
		$scope.models=unique($scope.models);
		
	};

	$scope.updateModel=function(modelSelected) {
		console.log(modelSelected);
		for(i=0;i<$scope.models.length;i++){
			console.log($scope.models[i]);
			if($scope.models[i]===modelSelected){
			console.log("yup");
			$scope.selectedModel=$scope.models[i];
				console.log($scope.selectedModel);
				$scope.AddItemShouldShow=true;
			break;
			}
			
		}
	};

			//this updates the user data
	$scope.addItemTouserList=function() {
		console.log($scope.selectedModel);
		for(var i=0;i<$scope.makeModel.length;i++){
			if($scope.makeModel[i].model===$scope.selectedModel&&$scope.makeModel[i].make===$scope.selectedMake){
				$scope.userList.push($scope.makeModel[i]);
				$scope.AddItemShouldShow=true;
				$scope.resetFormItems();
				break;
			}
			
		}
	};	
	
 
		  
	$scope.updateUserWant=function(userWant){
		$scope.userWant=userWant;
	};	  
		  	//this updates the user data
	$scope.addItemTouserWantList=function() {

			$scope.userWantList.push($scope.userWant);

	};	


	$scope.resetFormItems=function() {
		
		$scope.makes=[];
		$scope.models=[];
		var options = document.querySelectorAll('#typeSelect option');
      for (var i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
      };

	};	
		console.log($scope.userList);

  $scope.addRemoveButton=function(indexItem){
  	$scope.removeButtonShouldShow="true";
    $scope.removedItems.push(indexItem);
  };

  $scope.addToRemoveUserList=function(removedItem,checked){
   if(checked){
    $scope.removeUserList.push(removedItem);
    }else{$scope.removeUserList.remove(removedItem);}
  };

  $scope.removeItem=function(){
    for (var i = 0; i < $scope.userList.length+1; i++) { 
      for (var j = 0; j < $scope.removeUserList.length+1; j++) { 
        if($scope.userList[i]==$scope.removeUserList[j]){
          $scope.userList.splice(i, i+1);
          $scope.removeUserList.splice(j, j+1);
        };
  
       }; 

    };
    
    for (var k = 0; k < $scope.userWantList.length+1; k++) { 
      for (var j = 0; j < $scope.removeUserList.length+1; j++) { 
        if($scope.userWantList[k]==$scope.removeUserList[j]){
          $scope.userWantList.splice(k, k+1);
          $scope.removeUserList.splice(j, j+1);
        };
  
       }; 
       
    };
	};

  $scope.showItem=function(itemModel){
    for (var i = 0; i < $scope.userList.length+1; i++) { 
      if($scope.userList[i].model==itemModel)
      {
        return(true);
        break;
      };
    }
  };

   $scope.changeState=function(){
    $state.go('userInfo',{userInfoUserList:$scope.userList, userInfoUserWantList:$scope.userWantList});
    console.log($scope.userList);
  };   

}]);



wpApp.config( function( $stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise('/selection');
	$stateProvider
  .state( 'selection', {
			url: '/selection',
			controller: 'SelectionCtrl',
			templateUrl: appInfo.template_directory + 'templates/selection.html'
		})
    .state( 'userInfo', {
      url: '/userInfo',
      controller: 'InfoCtrl',
      templateUrl: appInfo.template_directory + 'templates/userInfo.html',
      params: {
            userInfoUserList: null,
            userInfoUserWantList: null,
        }
    })
     .state('home', {
        url: '/',
        templateUrl: appInfo.template_directory + 'templates/selection.html'
    })
      .state('submit', {
        url: '/submit',
        templateUrl: appInfo.template_directory + 'templates/process.php'
    })
});

wpApp.filter ( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml(text);
	}
}])