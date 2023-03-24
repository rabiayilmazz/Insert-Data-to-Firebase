// Firebase Admin SDK'yi yükle
var admin = require("firebase-admin");
// buradaki json dosyasının pathi değişiklik gösterebilir.
var serviceAccount = require("json/key/file/path");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nspect-ef693-default-rtdb.firebaseio.com"
});

function sendMyData(data) {
  var database = admin.database();

  // "myData" adlı bir node oluştur ve veri gönderecek
  database.ref('myData').set(data, function(error) {
    if (error) {
      // Hata durumunda kullanıcıya bilgi ver
      console.log('Veri gönderirken hata oluştu: ' + error.message);
    } else {
      // Başarılı bir şekilde veri gönderildi
      console.log('Veri başarıyla gönderildi.');
    }
  });
}

// Örnek veri gönderimi
sendMyData({ name: 'test', age: 30 });
