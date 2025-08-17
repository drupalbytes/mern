import React, { useEffect, useState } from "react";
import axios from "axios";

const categories = ["Starters", "Main", "Soup", "Desserts"];

export default function MenuSection() {
  const [menus, setMenus] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Starters");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/menu`)
      .then((res) => setMenus(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredMenus = menus.filter(
    (item) => item.category?.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <section className="container py-5">
      {/* Title */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h1>Checkout our <span class="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">Menu.</span></h1>

        {/* Category Tabs */}
        <div className="btn-group">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-light fw-semibold ${
                activeCategory === cat ? "text-white bg-primary" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="row g-4">
        {filteredMenus.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body bg-light">
                {/* Star Icon Only */}
                <div className="mb-2">
                  <span className="bg-white px-2 py-1 rounded-pill shadow-sm d-inline-flex align-items-center">
                    <FaStar className="text-warning" />
                  </span>
                </div>

                {/* Title & Description */}
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="text-muted small mb-2">{item.description}</p>
                <p className="fw-bold fs-5">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
