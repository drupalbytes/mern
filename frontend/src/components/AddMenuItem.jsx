import React, { useState } from "react";
import axios from "axios";

export default function AddMenuItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Starters");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", image);

      const uploadRes = await axios.post(`${import.meta.env.BACKEND_URL}/api/upload`, formData);
      const imageUrl = uploadRes.data.url;

      const menuData = {
        title,
        description,
        price,
        category,
        image: imageUrl,
        rating: {
          rate: 0,
          count: 0,
        },
      };

      await axios.post(`${import.meta.env.BACKEND_URL}/api/menu`, menuData, {
        headers: {
          Authorization: `Bearer YOUR_ADMIN_TOKEN`, // if using auth
        },
      });

      setSuccess(true);
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("Starters");
      setImage(null);
    } catch (err) {
      console.error(err);
      setError("Error adding menu item");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Add Menu Item</h2>

      {success && <p className="text-success">Menu item added successfully!</p>}
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Starters</option>
            <option>Main</option>
            <option>Soup</option>
            <option>Desserts</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Menu Item
        </button>
      </form>
    </div>
  );
}
