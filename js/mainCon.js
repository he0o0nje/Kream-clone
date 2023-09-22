$.ajax({
  type: "get",
  url: "./data1.json",
  dataType: "json",
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      let product = response[i];
      let image = product["image"];
      let title = product["title"];
      let subtitle = product["subtitle"];
      let price = product["price"];
      let comment = product["comment"];
      let temp_html = `<div>
                      <a href="#" class="item_inner">
                        <div class="item_img">
                          <img src='${image}'/>
                        </div>
                        <p class="brand">${title}<p>
                        <p class="name">${subtitle}</p>
                        <h3 class="price">${price}</h3>
                        <p class="desc">${comment}</p>
                      </a>
                    </div>`;
      $(".product_item").eq(i).append(temp_html);
    }
  },
});
$.ajax({
  type: "get",
  url: "./data2.json",
  dataType: "json",
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      let product = response[i];
      let image = product["image"];
      let title = product["title"];
      let subtitle = product["subtitle"];
      let price = product["price"];
      let comment = product["comment"];
      let temp_html = `<div>
                      <a href="#" class="item_inner">
                        <div class="item_img">
                          <img src='${image}'/>
                        </div>
                        <p class="brand">${title}<p>
                        <p class="name">${subtitle}</p>
                        <h3 class="price">${price}</h3>
                        <p class="desc">${comment}</p>
                      </a>
                    </div>`;
      $(".product_item_hot").eq(i).append(temp_html);
    }
  },
});
$.ajax({
  type: "get",
  url: "./data3.json",
  dataType: "json",
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      let product = response[i];
      let image = product["image"];
      let title = product["title"];
      let subtitle = product["subtitle"];
      let price = product["price"];
      let comment = product["comment"];
      let temp_html = `<div>
                      <a href="#" class="item_inner">
                        <div class="item_img">
                          <img src='${image}'/>
                        </div>
                        <p class="brand">${title}<p>
                        <p class="name">${subtitle}</p>
                        <h3 class="price">${price}</h3>
                        <p class="desc">${comment}</p>
                      </a>
                    </div>`;
      $(".product_item_new").eq(i).append(temp_html);
    }
  },
});
