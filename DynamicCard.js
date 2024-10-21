document
  .getElementById("cardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Kullanıcıdan alınan değerler
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    // Yeni kart div'ini oluştur
    var card = document.createElement("div");
    card.classList.add("card");

    // Kart başlığı
    var cardTitle = document.createElement("h3");
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    // Kart içeriği
    var cardContent = document.createElement("p");
    cardContent.textContent = content;
    card.appendChild(cardContent);

    // Kartı sayfaya ekle
    document.getElementById("cardContainer").appendChild(card);

    // Formu temizle
    document.getElementById("cardForm").reset();
  });
