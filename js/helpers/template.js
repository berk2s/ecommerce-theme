export const itemCardTemplate = `<a href="detail/{0}" class="card-content">
                            <div class="image-area">
                                <img src="{1}" alt="product image">
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
                                    {2}
                                </h4>

                                <div class="price-area">
                                    <span class="old-price-text">$\{3}</span>
                                    <span class="current-price-text">$\{4}</span>
                                </div>
                            </div>
                        </a>`;

export const headerDropdownTemplate = `
                        <div class="dropdown">
                            <a class="nav-link dropdown-toggle" aria-current="page" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 {0} {1} <img src="../assets/header/user_icon.png" style="width: 2rem; height: 2rem;" alt="user icon">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Order History</a></li>
                                <li><a class="dropdown-item js-logout" href="#">Logout</a></li>
                            </ul>
                        </div>
`;

String.prototype.format = function() {
    var args = arguments;

    return this.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
    });
};