const loadNewsData = async () => {
   const url = `https://openapi.programming-hero.com/api/news/category/01`;
   const res = await fetch(url);
   const data = await res.json();
   displayNewsData(data.data);
};
const displayNewsData = (newsDatas) => {
   const newsGallery = document.getElementById("news-gallery");
   console.log(newsDatas);
   newsDatas.forEach((newsData) => {
      const singleNewsContainer = document.createElement("div");
      singleNewsContainer.classList.add("single-news");
      singleNewsContainer.innerHTML = `
                <div id="single-news-image">
                  <img
                     style="width: 230px; height: 280px"
                     src="${newsData.thumbnail_url}"
                     alt=""
                  />
               </div>
               <div id="single-news-des">
                  <div id="single-news-des-top">
                     <h3 id="single-news-des-title">${newsData.title}</h3>
                     <p id="single-news-des-para">${newsData.details}</p>
                  </div>
                  <div id="single-news-des-footer">
                     <div id="bloger">
                        <div id="blog-image">
                           <img
                              style="width: 40px"
                              src="${newsData.author.img}"
                              alt=""
                           />
                        </div>
                        <div id="blog-des">
                           <h4 id="bloger-name">${newsData.author.name}</h4>
                           <p id="bloging-date">${newsData.author.published_date}</p>
                        </div>
                     </div>
                     <div id="view">
                        <div id="view-icon">
                           <img
                              style="width: 30px"
                              src="image/view-eye.svg"
                              alt=""
                           />
                        </div>
                        <div id="view-count">
                           <span id="view-count-number">${newsData.total_view}</span>
                        </div>
                     </div>
                     <div id="rate">
                        <img src="image/star-half.svg" alt="" /><img
                           src="image/star.svg"
                           alt=""
                        /><img src="image/star.svg" alt="" /><img
                           src="image/star.svg"
                           alt=""
                        /><img src="image/star.svg" alt="" />
                     </div>
                     <div id="details">
                        <button id="details-btn">Details</button>
                     </div>
                  </div>
               </div>
    `;
      newsGallery.appendChild(singleNewsContainer);
   });
};
loadNewsData();
