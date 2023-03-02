import React, { Component } from "react";
import img1 from "../components/img/img-iphone/iphone-12-tim-1-600x600.jpg"
import img2 from "../components/img/img-iphone/iphone-11-trang-600x600.jpg"
import img3 from "../components/img/img-iphone/iphone-14-pro-max-vang-thumb-600x600.jpg"
import img4 from "../components/img/img-iphone/iPhone-14-thumb-do-600x600.jpg"
import img5 from "../components/img/img-oppo/oppo-reno8-4g-thumb-vang-600x600.jpg"
import img6 from "../components/img/img-oppo/oppo-reno8-pro-thumb-xanh-1-600x600.jpg"
import img7 from "../components/img/img-oppo/oppo-reno8-z-5g-vang-thumb-2-600x600.jpg"
import img8 from "../components/img/img-oppo/oppo-reno8t-den1-thumb-600x600.jpg"

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Iphone 11",
        src: img1,
        description: "iPhone 11 là một trong những mẫu điện thoại cao cấp của Apple, với giá thành phù hợp và nhiều tính năng hấp dẫn.",
        content:
          "iPhone 11 là một trong những mẫu điện thoại cao cấp của Apple.",
        price: 2300,
        colors: ["red", "yellow", "purple"],
        count: 1,
      },
      {
        _id: "2",
        title: "Iphone 11",
        src: img2,
        description: "iPhone 11 là một trong những mẫu điện thoại cao cấp của Apple, với giá thành phù hợp và nhiều tính năng hấp dẫn.",
        content:
          "iPhone 11 là một trong những mẫu điện thoại cao cấp mới nhất của Apple.",
        price: 700,
        colors: ["red", "yellow", "purple"],
        count: 1,
      },
      {
        _id: "3",
        title: "IPhone 14",
        src: img3,
        description: "iPhone 11 là một trong những mẫu điện thoại cao cấp của Apple, với giá thành phù hợp và nhiều tính năng hấp dẫn.",
        content:
          "iPhone 11 là một trong những mẫu điện thoại cao cấp mới nhất của Apple.",
        price: 2340,
        colors: ["red", "yellow", "purple"],
        count: 1,
      },
      {
        _id: "4",
        title: "IPhone 14",
        src: img4,
        description: "iPhone 14 là một trong những mẫu điện thoại cao cấp của Apple, với giá thành phù hợp và nhiều tính năng hấp dẫn.",
        content:
          "iPhone 14 là một trong những mẫu điện thoại cao cấp mới nhất của Apple.",
          price: 3240,
                colors: ["red", "yellow", "purple"],

        count: 1,
      },
      {
        _id: "5",
        title: "Oppo Reno 8",
        src: img5,
        description: "Máy được trang bị chip xử lý Snapdragon 720G, cho hiệu năng mạnh mẽ và tốc độ xử lý nhanh chóng",
        content:
        "Oppo được trang bị nhiều tính năng tiên tiến, bao gồm camera chụp ảnh đẹp và hiệu năng xử lý tốt.",
        price: 2000,
                colors: ["red", "yellow", "purple"],

        count: 1,
      },
      {
        _id: "6",
        title: "OPPO RENO 8Z",
        src: img6,
        description: "Máy được trang bị chip xử lý Snapdragon 720G, cho hiệu năng mạnh mẽ và tốc độ xử lý nhanh chóng",
        content:
        "Oppo được trang bị nhiều tính năng tiên tiến, bao gồm camera chụp ảnh đẹp và hiệu năng xử lý tốt.",
        price: 1070,
                colors: ["red", "yellow", "purple"],

        count: 1,
      },  {
        _id: "7",
        title: "OPPO RENO 8Z",
        src: img7,
        description: "Máy được trang bị chip xử lý Snapdragon 720G, cho hiệu năng mạnh mẽ và tốc độ xử lý nhanh chóng",
        content:
        "Oppo được trang bị nhiều tính năng tiên tiến, bao gồm camera chụp ảnh đẹp và hiệu năng xử lý tốt.",
          price: 1400,
                colors: ["red", "yellow", "purple"],

        count: 1,
      }, {
        _id: "8",
        title: "OPPO RENO 8T",
        src: img8,
        description: "Máy được trang bị chip xử lý Snapdragon 720G, cho hiệu năng mạnh mẽ và tốc độ xử lý nhanh chóng",
        content:
        "Oppo được trang bị nhiều tính năng tiên tiến, bao gồm camera chụp ảnh đẹp và hiệu năng xử lý tốt.",
          price: 2600,
                colors: ["red", "yellow", "purple"],

        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
