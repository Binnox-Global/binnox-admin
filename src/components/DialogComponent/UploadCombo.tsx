"use client";
import React, { useEffect, useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";
import { NewProductImageFileSvg } from "../icons/NewProductImageFileSvg";
import { AddIconSvg } from "../icons/AddIconSvg";
import { useDialog } from "@/contexts/DialogContext";

// TypeScript Interfaces
interface FoodItem {
  name: string;
  price: string;
}

interface FoodCategory {
  category: string;
  items: FoodItem[];
}

interface SelectedCategory {
  id: number;
  selectedCategory: string;
  selectedItems: string[];
}

// Sample data (replace with backend API later)
const foodData: FoodCategory[] = [
  {
    category: "Burgers",
    items: [
      { name: "Classic Cheeseburger", price: " ₦800.99" },
      { name: "BBQ Bacon Burger", price: " ₦1000.99" },
      { name: "Spicy Jalapeño Burger", price: " ₦900.49" },
      { name: "Mushroom Swiss Burger", price: " ₦900.99" },
      { name: "Vegan Black Bean Burger", price: " ₦800.49" },
    ],
  },
  {
    category: "Pizza",
    items: [
      { name: "Margherita Pizza", price: " ₦1002.99" },
      { name: "Pepperoni Pizza", price: " ₦1003.99" },
      { name: "BBQ Chicken Pizza", price: " ₦1004.49" },
      { name: "Veggie Supreme Pizza", price: " ₦1003.49" },
      { name: "Four Cheese Pizza", price: " ₦1002.99" },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Spaghetti Carbonara", price: " ₦1001.99" },
      { name: "Chicken Alfredo", price: " ₦1002.99" },
      { name: "Penne Arrabbiata", price: " ₦1000.99" },
      { name: "Lasagna Bolognese", price: " ₦1003.49" },
      { name: "Pesto Gnocchi", price: " ₦1001.49" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: " ₦600.99" },
      { name: "New York Cheesecake", price: " ₦700.49" },
      { name: "Tiramisu", price: " ₦600.99" },
      { name: "Apple Pie", price: " ₦500.99" },
      { name: "Ice Cream Sundae", price: " ₦500.49" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Coca-Cola", price: " ₦200.49" },
      { name: "Fresh Lemonade", price: " ₦300.49" },
      { name: "Iced Coffee", price: " ₦300.99" },
      { name: "Green Tea", price: " ₦200.99" },
      { name: "Strawberry Milkshake", price: " ₦400.99" },
    ],
  },
];

function UploadCombo() {
  const [categories, setCategories] = useState<SelectedCategory[]>([
    { id: Date.now(), selectedCategory: "", selectedItems: [] },
  ]);

  const { toggleDialog } = useDialog();

  // Add a new category dropdown
  const addCategory = () => {
    setCategories([
      ...categories,
      { id: Date.now(), selectedCategory: "", selectedItems: [] },
    ]);
  };

  // Remove a category section
  const removeCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  // Handle category selection
  const handleCategoryChange = (id: number, category: string) => {
    setCategories(
      categories.map((c) =>
        c.id === id
          ? { ...c, selectedCategory: category, selectedItems: [] }
          : c
      )
    );
  };

  // Handle item selection
  const handleItemSelection = (id: number, itemName: string) => {
    setCategories(
      categories.map((c) =>
        c.id === id
          ? {
              ...c,
              selectedItems: c.selectedItems.includes(itemName)
                ? c.selectedItems.filter((item) => item !== itemName) // Remove if already selected
                : [...c.selectedItems, itemName], // Add if not selected
            }
          : c
      )
    );
  };
  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <div className="w-[639px] max-h-[1049px] inline-flex gap-[21px] flex-col relative bg-white rounded-lg p-[30px]">
      <div className="w-full h-9 flex">
        <div className="grow shrink basis-0 text-neutral-950 text-[28px] font-medium font-['Raleway'] leading-9">
          Upload Combo
        </div>
        <div
          className="close-button cursor-pointer"
          onClick={() => toggleDialog("open")}
        >
          <Dialog2CloseSvg />
        </div>
      </div>
      {/*  */}
      <div className="form-container flex flex-col gap-[24px]">
        {/*  */}
        <label className="h-[68px] px-[30px] rounded-lg border-2 border-[#b1cdf3]  justify-between items-center inline-flex cursor-pointer">
          <div className="flex items-center gap-[26px]">
            <NewProductImageFileSvg />{" "}
            <div className="text-black/40 text-sm font-normal font-['Raleway'] leading-[21px]">
              Upload or drop a file right here
            </div>
          </div>
          <div className="text-[#333333] text-sm font-normal font-['Raleway'] leading-[21px]">
            JPEG, PNG, GIF, SVG....
          </div>
          <input type="file" className="hidden" />
        </label>
        {/*  */}
        <div className="flex flex-col gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Name
            </span>
            <input
              type="text"
              className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Description
            </span>
            <input
              type="text"
              className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        {/* categories mapping */}
        <div className="categories-container flex flex-wrap gap-[20px]">
          {categories.map((category, index) => (
            <div className="flex flex-col gap-[8px]">
              <span
                className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px] flex items-center justify-between`}
              >
                Category
                {/* Remove Button */}
                {index > 0 && (
                  <button
                    className=" px-3 py-1 text-red-500 rounded-lg hover:text-red-600"
                    onClick={() => removeCategory(category.id)}
                  >
                    ✕
                  </button>
                )}
              </span>
              <select
                value={category.selectedCategory}
                onChange={(e) =>
                  handleCategoryChange(category.id, e.target.value)
                }
                className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              >
                <option value="">Select Category</option>
                {foodData.map((food) => (
                  <option key={food.category} value={food.category}>
                    {food.category}
                  </option>
                ))}
              </select>

              {/* Show items when category is selected */}
              {category.selectedCategory && (
                <div className="w-[277px] h-[220px] px-2.5 py-5 bg-[#f0f0f0] rounded-[10px] flex-col justify-between items-start gap-5 inline-flex overflow-hidden ">
                  {foodData
                    .find((food) => food.category === category.selectedCategory)
                    ?.items.map((item) => (
                      <label
                        key={item.name}
                        className="flex w-full justify-between items-center space-x-2"
                      >
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            checked={category.selectedItems.includes(item.name)}
                            onChange={() =>
                              handleItemSelection(category.id, item.name)
                            }
                          />

                          <div className=" text-black text-sm font-semibold font-['Raleway']">
                            {item.name}
                          </div>
                        </div>
                        <div className="text-right text-black text-sm font-medium font-['Raleway']">
                          {item.price}
                        </div>
                      </label>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Selected Items */}
        <div className="">
          <h3 className="text-lg font-semibold ">Selected Items:</h3>
          <ul className="mt -2 text-gray-700">
            {categories
              .flatMap((c) => c.selectedItems)
              .map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <button
          className="flex gap-[8px] border-b-[2px] h-[47px] items-center text-[#F45309]"
          onClick={addCategory}
        >
          <AddIconSvg />
          Add Category
        </button>

        {/* flex */}
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Total Price
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-[#9e9e9e] bg-[#000] text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discounted Price
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-[#9e9e9e] bg-[#000] text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        {/* flex */}
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Dishes Available
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount (N)
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
      </div>
      {/*  */}
      <div className="mt-auto mb-[30px] justify-start items-start gap-[30px] inline-flex">
        <button className="w-[125.48px] h-[41.91px] bg-[#F45309] rounded-lg justify-center items-center gap-[4.97px] inline-flex text-white text-sm font-medium font-['Raleway'] leading-[21px]">
          Activate
        </button>
        <button
          className="h-[41.91px] w-[97px] bg-[#d3d3d9] rounded-lg justify-center items-center gap-[4.97px] inline-flex text-[#212143] text-sm font-medium font-['Raleway'] leading-[21px]"
          onClick={() => toggleDialog("open")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UploadCombo;
