
  Meteor.startup(function () {

    // code to run on server at startup
  });

var xlsx = Meteor.npmRequire('xlsx');
var shell = Meteor.npmRequire('shelljs');
var fs = Meteor.npmRequire('fs');

Meteor.methods({
  importSilentAuctionData: function () {

    console.log('Importing silent auction data');
    // Source and distination directories
    // var srcDir = '/Users/jeffry/Google\\ Drive/2017\\ Tournament/Silent\\ Auction';
    // var dstDir = '/Users/jeffry/Dropbox/Public/CF/web';
    var srcDir = '/Users/jeffry/Google\\ Drive/Cabin\\ Fever\\ (1)\2018\\ Tournament/Silent\\ Auction';
    // var dstDir = '/Users/jeffry/repos/duffar.cabinfeverbeanbags.org/web';
    var dstDir = '/Users/jeffry/test';
    var srcImageDir = srcDir; //+'/images';
    var dstImageDir = dstDir+'/img/auction';

    // Ensure destination directories exist
    shell.mkdir('-p', dstImageDir);

    // Backup the current images
    // var dstImageBackupDir = dstImageDir+'_backup';
    // shell.rm('-rf', dstImageBackupDir);  // remove previous backup file
    // shell.mv(dstImageDir, dstImageBackupDir);
    // shell.mkdir('-p', dstImageDir);

    // // copy and scale the images directory
    // var copyAndScaleCmd = 'sips -Z 640 '+srcImageDir+'/*.JPG --out '+dstImageDir;
    // // var copyAndScaleCmd = 'nconvert -keepfiledate -ratio -resize 640 0 -jpegtrans exif -o '+dstImageDir+'/%.JPG '+srcImageDir+'/*.JPG';
    // console.log('execute command: '+copyAndScaleCmd);
    // shell.exec(copyAndScaleCmd);
    // var orientCmd = 'nconvert -jpegtrans exif -overwrite '+dstImageDir+'/*.JPG';
    // shell.exec(orientCmd);

    // nconvert -jpegtrans exif -overwrite *.JPG
    // Generate the auction item file

    // Map of auction item attributes to column titles in the source spreadsheet
    var attributeMap = {
      'name': 'DONOR',
      'url': 'Company Web Link',
      'desc': 'ITEM DESCRIPTION',
      'img': 'IMAGE FILE NAME',
      'value': 'RETAIL VALUE',
      'date': 'NO'
    };
    var stopTags = ['LIVE AUCTION'];

    var HEADER_ROW = 0;

    // map of auction item attributes to column number in the source spreadsheet - we'll figure this out when we read the header row
    var columnMap = {};

    try {
      var now = new Date();
      var auctionItems = [];
      console.log('reading workbook...');
      // var srcDir = '/Users/jeffry/Google\\ Drive/Cabin\\ Fever\\ (1)\2018\\ Tournament/Silent\\ Auction';
      var fname = srcDir
      var workbook = xlsx.readFile('/Users/jeffry/Google Drive/Cabin Fever (1)/2018 Tournament/Silent Auction/2018 Cabin Fever Auction.xlsx');
      // var workbook = xlsx.readFile('/Users/jeffry/Google Drive/2017 Tournament/Silent Auction/Cabin Fever Auction 2017 List.xlsx');
      console.log('loaded workbook!');
      var sheetNames = workbook.SheetNames;
      sheetNames.forEach(function(name) {
        var worksheet = workbook.Sheets[name];
        if (name == 'Silent Auction') {
          console.log('found sheet: '+name);
          var rows = xlsx.utils.sheet_to_json(worksheet, {raw:true, header:1});
          // console.log('rows: '+rows.length);
          for (var i=0; i<rows.length; i++) {
            var row = rows[i];
            // console.log('processing row '+i, rows[i]);
            if (columnMap['name']==undefined) { // if we don't have headers yet look for them in this row
              // HEADER ROW - locate the columns were looking for
              for (var attr in attributeMap) {
                // console.log('look for '+attr);
                for (var c=0; c<row.length; c++) {
                  // console.log('checking '+row[c]);
                  if (row[c]===attributeMap[attr]) {
                    columnMap[attr] = c;
                  }
                }
              }
              console.log('columnMap: '+JSON.stringify(columnMap, null, 2))
            } else {
              // DATA ROW - grab identified columns and build auction item
              item = {};
              for (attr in columnMap) {
                item[attr] = row[columnMap[attr]] || "";
              }
              if (stopTags.indexOf(item.desc)>=0) {
                console.log('hit '+item.desc+'. Stop processing auction items')
                break;
              }
              if (item.name && item.img) {
                item.date = new Date(now.getTime()+item.date);
                console.log('processing auction item: '+item.desc);
                auctionItems.push(item);
                var srcImage = srcImageDir+'/'+item.img;
                var dstImage = dstImageDir+'/'+item.img;
                if (!shell.test('-f', dstImage)) {
                  console.log('  copying and scaling image file: '+item.img);
                  // copy and scale the images directory
                  // var copyAndScaleCmd = 'nconvert -quiet -ratio -resize 500 0 -overwrite -o '+dstImage+' '+srcImage;
                  var copyAndScaleCmd = 'sips -Z 500 '+srcImage+' --out '+dstImage;
                  // console.log('exec: '+copyAndScaleCmd);
                  if (shell.exec(copyAndScaleCmd).code != 0) {
                    console.log('  copy of image failed: '+copyAndScaleCmd);
                  } else {
                    var orientCmd = 'nconvert -quiet -jpegtrans exif -overwrite '+dstImage;
                    // console.log('exec: '+orientCmd);
                    shell.exec(orientCmd);
                  }
                }
              }
            }
          }
        }
      });
      // Backup current auctionItems file
      var dstAuctionFile = dstDir+'/raw_auction.html';
      var dstAuctionBackupFile = dstDir+'/raw_auction_backup.html';
      shell.mkdir('-p', dstDir);
      shell.rm('-rf', dstAuctionBackupFile);  // remove previous backup file
      shell.mv(dstAuctionFile, dstAuctionBackupFile);
      // Construct the final document and write it to the output file
      var outputdoc = {
        "auctionGroups": {
          "standard": auctionItems
        }
      };
      var outbuff = 'auctionCallback('+JSON.stringify(outputdoc, null, 2)+')';
      fs.writeFileSync(dstAuctionFile, outbuff);

      console.log('Import completed successfully');
    } catch (exception) {
      console.log('error reading workbook: '+exception);
    }
  },

  importTeamData: function () {
    console.log('Importing team data');
    // Source and distination directories
    var srcDir = '/Users/jeffry';
    var dstDir = '/Users/jeffry/Dropbox/Public/CF/web'

    console.log('reading workbook...');
    var infile = srcDir+'/2017tournament.xlsx';
    shell.ls(srcDir);
    shell.ls(infile);
    if (!shell.test('-f', infile)) {
      console.log('cant find input file: '+infile);
    }
    var workbook = xlsx.readFile(infile);
    console.log('loaded workbook!');
    var sheetNames = workbook.SheetNames;
    sheetNames.forEach(function(name) {
      // console.log('examine sheet: '+name);
      var worksheet = workbook.Sheets[name];
      if (name == 'By Pool &amp; SubPool') {
        console.log('found sheet: '+name);
        var poolList = [];
        var rows = xlsx.utils.sheet_to_json(worksheet, {raw:true, header:1});
        var curPool = null;
        var currentSubPool = '';
        for (var i=0; i<rows.length; i++) {
          var row = rows[i];
          if (!!row[0]) {
            var poolName = row[0][0];
            currentSubPool = row[0];
            if (!curPool || poolName!=curPool.name) {
              curPool = {
                name: poolName,
                teams: []
              }
              poolList.push(curPool);
            }
          }
          var team = {
            name: row[1],
            players: [row[2]||'?',row[3]||'?']
          };
          curPool.teams.push(team);
          // console.log('row '+i+' = '+JSON.stringify(row, null, 2));
        }

        // Now render the output as something we can embed
        var outputDoc = '';
        outputDoc += '<table class="brackets">\n';
        for (var i in poolList) {
          var pool = poolList[i];
          // console.log('PoolList = '+JSON.stringify(pool, null, 2));
          if ((i%2)==0) {
            outputDoc += '  <tr>\n';
          }
          outputDoc += '    <td class="pcol">\n';
          outputDoc += '      <table class="pool">\n';
          outputDoc += '        <tr>\n';
          outputDoc += '          <th>Pool '+pool.name+'</th>\n';
          outputDoc += '        </tr>\n';
          for (var j in pool.teams) {
            var team = pool.teams[j];
            outputDoc += '        <tr>\n';
            outputDoc += '          <td>\n';
            outputDoc += '            '+team.name;
            outputDoc += ' <i>('+team.players[0]+' &amp; '+team.players[1]+')</i>\n';
            outputDoc += '          </td>\n';
            outputDoc += '        </tr>\n';
          }
          outputDoc += '      </table>\n';
          outputDoc += '    </td>\n';
          if ((i%2)==1) {
            outputDoc += '  </tr>\n';
          }

        }
        outputDoc += '</table>\n';

        // console.log(outputDoc);
        // console.log('PoolList = '+JSON.stringify(poolList, null, 2));
        var dstTeamsFile = dstDir+'/teams.html';
        fs.writeFileSync(dstTeamsFile, outputDoc);

      }
    });

    console.log('Import completed successfully');
  },

});
