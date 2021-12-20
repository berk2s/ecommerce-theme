export const itemCardTemplate = `<div class="card-content">
                            <div class="image-area">
                                <img src="{0}" />
                            </div>

                            <div class="review-area">
                                <div class="star-list">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="review-text">(4)</span>

                                </div>

                            </div>

                            <div class="info-area">
                                <h4 class="product-name-text">
                                    {1}
                                </h4>

                                <div class="price-area">
                                    <span class="old-price-text">$\{2}</span>
                                    <span class="current-price-text">$\{3}</span>
                                </div>
                            </div>
                        </div>`;


String.prototype.format = function() {
    var args = arguments;

    return this.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
    });
};