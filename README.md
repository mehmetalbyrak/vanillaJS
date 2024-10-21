
# ** Vanilla JS **
Vanilla JS, framework'lere bağımlı olmadan hafif, hızlı ve esnek projeler geliştirmenizi sağlar, JavaScript'in temel gücünü korur.
Bu proje, Vanilla JS (saf JavaScript) kullanılarak dinamik web bileşenleri oluşturmayı amaçlar. Proje, dinamik kart ekleme, buton tıklama, API'den veri çekme, hover etkileşimleri ve form doğrulama gibi temel web işlevselliklerini içermektedir. Bu projede herhangi bir kütüphane veya framework kullanılmamıştır; tüm işlemler saf JavaScript ile gerçekleştirilmiştir.

## **Özellikler**

- **Dinamik Kart Ekleme**: Kullanıcı tarafından form üzerinden girilen başlık ve içerikle sayfaya dinamik olarak kartlar ekler.
- **Button Click**: Bir butona tıkladığınızda bir paragrafın rengini değiştirir.
- **Fetch API**: API'den veri çeker ve sayfada bir liste halinde gösterir.
- **Hover Etkileşimi**: Bir div üzerine fare ile gelindiğinde arka plan rengini değiştirir.
- **Form Doğrulama**: Formda zorunlu alan boş bırakıldığında kullanıcıyı uyarır ve formun gönderilmesini engeller.

## **Dosya Yapısı**

```
vanillaJS/
│
├── DynamicCard.css       # Dinamik kartlar için stil dosyası
├── DynamicCard.html      # Dinamik kart ekleme işlemi için HTML dosyası
├── DynamicCard.js        # Dinamik kartların JavaScript ile yönetilmesi
├── medium.css            # medium.html için stil dosyası
├── medium.html           # Buton tıklama, veri çekme, hover ve form doğrulama işlemlerini içeren HTML dosyası
└── README.md             # Proje hakkında açıklamalar
```

## **Kurulum**

Projeyi yerel ortamınıza kurmak için şu adımları izleyin:

1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/mehmetalbayrak/vanillaJS.git
   ```

2. Proje klasörüne gidin:
   ```bash
   cd vanillaJS
   ```

3. `DynamicCard.html` veya `medium.html` dosyalarından birini bir tarayıcıda açarak projeyi başlatın.

## **Kullanım**

Projeyi başlattıktan sonra aşağıdaki etkileşimleri test edebilirsiniz:

1. **Dinamik Kart Ekleme (DynamicCard.html)**:
   - Başlık ve içerik girerek sayfaya dinamik kartlar ekleyin.
   - Yeni bir kart eklemek için formu doldurup "Kart Ekle" butonuna tıklayın.
   
2. **Button Click (medium.html)**:
   - "Tıkla" butonuna tıklayarak bir paragrafın rengini maviye dönüştürün.
   
3. **Fetch API (medium.html)**:
   - Sayfanın altında, API'den alınan ilk 5 gönderiyi bir liste olarak görebilirsiniz.
   
4. **Hover Etkileşimi (medium.html)**:
   - Kırmızı bir kutunun üzerine fare ile gelerek rengi yeşile dönüştürün.
   
5. **Form Doğrulama (medium.html)**:
   - Formda "Adınız" alanını boş bıraktığınızda, formun gönderilmesi engellenecektir ve uyarı mesajı gözükecektir.

