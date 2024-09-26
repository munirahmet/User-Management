# User Management

Bu proje, kullanıcıların üzerinden işlemleri yapay zeka ile kolaylaştırmak için geliştirilmiştir. Aşağıdaki işlemler için işlevsel özellikler sunar:

- **Kullanıcı Ekleme**
- **Kullanıcı Silme**
- **Kullanıcı Düzenleme**
- **Yapay Zeka Chat Botundan Kullanıcı Verileri İsteme**: Bu özellik gerekli verileri girdikten sonra her türlü durum için çalışabilir. Örneğin "Hastanemde en çok nöbet tutan doktorların listesini ver." veya "Sınıfımdaki öğrencilerden en fazla kendini geliştireni bana söyle." gibi.

## Backend, Node.js kullanılarak geliştirilmiştir ve veritabanı işlemleri için PostgreSQL kullanır. Frontend, kullanıcı dostu bir arayüz sağlamak amacıyla React.js ile geliştirilmiştir.

Bu tool'un çalışabilmesi için aşağıdaki yazılımların sisteminizde kurulu olması gerekmektedir:

- **Node.js** 
- **React.js** 
- **npm** 
- **PostgreSQL** 


## Gerekli Kurulumlar ve Uygulamayı Başlatma

1. **Gerekli Kurulumlar**:

   Projeyi çalıştırmadan önce, projenin içerdiği alt dizinlerde gerekli bağımlılıkları kurmanız gerekmektedir.

   - **Ön Yüz (Frontend)**
     - Dizine Gitme: `cd user-management-client`
     - Gerekli Modülleri Kurma: `npm install`

   - **Sunucu (Server)**
     - Dizine Gitme: `cd user-management`
     - Gerekli Modülleri Kurma: `npm install`

2. **Uygulamayı Başlatma**:

   - **Sunucuyu Başlatma**:
     - Sunucu Dizine Gitme: `cd user-management`
     - Sunucuyu Başlatma: `node app.js`

   - **Ön Yüz Uygulamasını Başlatma**:
     - Ön Yüz Dizine Gitme: `cd user-management-client`
     - Uygulamayı Başlatma: `npm start`
       - Uygulama otomatik olarak tarayıcınızda açılacaktır.
