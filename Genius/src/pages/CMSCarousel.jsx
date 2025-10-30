import React, { useEffect, useState } from "react";

// A simple placeholder component (since Framer's CanvasPlaceholder is unavailable)
function Placeholder({ title, subtitle }) {
  return (
    <div
      style={{
        border: "1px dashed #ccc",
        borderRadius: 8,
        padding: 20,
        textAlign: "center",
        background: "#f9f9f9",
      }}
    >
      <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
      <p style={{ fontSize: 12, color: "#666" }}>{subtitle}</p>
    </div>
  );
}

// A basic horizontal carousel (simplified version)
export default function CMSCarousel({ collectionList = [], startLayers = [], endLayers = [] }) {
  const [items, setItems] = useState([]);

  // Simulate fetching CMS items (replace this with your own API or data)
  useEffect(() => {
    if (collectionList.length > 0) {
      // Example: pretend each collection item has a 'title'
      const fetchedItems = collectionList.map((item, index) => ({
        id: index,
        title: item.title || `Item ${index + 1}`,
      }));
      setItems(fetchedItems);
    } else {
      // Default placeholder items if no CMS data
      setItems([]);
    }
  }, [collectionList]);

  // Combine start + CMS + end layers
  const layers = [
    ...startLayers,
    ...(items.length > 0
      ? items.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: 200,
              height: 150,
              marginRight: 30,
              background: "#1C64FF",
              color: "#fff",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            {item.title}
          </div>
        ))
      : Array.from({ length: 3 }).map((_, i) => (
          <Placeholder
            key={`ph-${i}`}
            title="Run project to view carousel content"
            subtitle="Collection List content is not available in the editor."
          />
        ))),
    ...endLayers,
  ];

  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: 30,
        padding: "0 40px",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
      }}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          style={{
            flex: "0 0 auto",
            scrollSnapAlign: "center",
          }}
        >
          {layer}
        </div>
      ))}
    </div>
  );
}
