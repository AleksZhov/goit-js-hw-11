export function createGalleryCards(images) {
  return images.map(
    ({
      webformatURL,
      webformatHeight,
      webformatWidth,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<a href="${largeImageURL}" class="photo-card ">
  <img class="gallery-img " src="${webformatURL}" alt="${tags}" height="${webformatHeight}" width = "${webformatWidth}"  loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
  
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</a>`;
    }
  );
}
