$.ajax({
  type: "get",
  url: "./sub1.json",
  dataType: "json",
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      let exhibition = response[i];
      let image = exhibition["image"];
      let title = exhibition["title"];
      let desc = exhibition["desc"];
      let temp_html = `<a href="#" class="detail_exhibition_item">
                      <img src='${image}'>
                      <p class="detail_exhibition_title">${title}</p>
                      <p class="detail_exhibition_desc">${desc}</p>
                  </a>`;
      $(".detail_exhibitions").eq(i).append(temp_html);
    }
  },
});
$.ajax({
  type: "get",
  url: "./sub2.json",
  dataType: "json",
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      let exhibition = response[i];
      let image = exhibition["image"];
      let title = exhibition["title"];
      let subtitle = exhibition["subtitle"];
      let price = exhibition["price"];
      let temp_html = `<a href="#" class="item_inner">
                          <div class="product_thumb">
                              <img src="${image}" alt="">
                          </div>
                          <div class="product_info">
                              <div class="product_detail">
                                  <p class="size">${title}</p>
                                  <p class="name">${subtitle}</p>
                                  <span class="express_mark">빠른배송</span>
                              </div>
                              <div class="product_price">
                                  <p class="discount_price">
                                      <span class="amount">${price}</span>
                                      <span class="won">원</span>
                                  </p>
                                  <p class="price_desc">즉시 구매가</p>
                              </div>
                          </div>
                      </a>`;
      $(".stock2").eq(i).append(temp_html);
    }
  },
});
