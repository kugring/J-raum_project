// src/App.js

import React, {useState, useEffect} from 'react';
import './App.css'; // 스타일 파일 추가

function App() {
    // 커피와 음료수 메뉴 아이템과 주문 내역을 관리하기 위한 state
    const menuItems = [
        {
            id: 1,
            category: 'Coffee',
            name: 'Americano',
            price: 3,
            image: 'https://www.spcmagazine.com/wp-content/uploads/2022/08/spc_%ED%82%B9%EC%82%AC%EC%9D%B4%EC%A6%88-%EC%95%84%EC%9D%B4%EC%8A%A4-%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8_1000.jpg'
        },
        {
            id: 2,
            category: 'Coffee',
            name: 'Latte',
            price: 4,
            image: 'https://health.chosun.com/site/data/img_dir/2023/02/02/2023020202137_0.jpg'
        },
        {
            id: 3,
            category: 'NonCoffee',
            name: 'malcha',
            price: 4.5,
            image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA1MjBfNTUg/MDAxNjIxNDQwODM2MzEy.Ls5CKbqLphbAfxQX8r1-okwlv5MzNuhAKOm3GViDQcwg.6HS4uWVGqdATcYd_qrrQzv7HK2LFtr1f_aFbOiJdQicg.JPEG.kgyfjq/output_2525940195.jpg?type=w800'
        },
        {
            id: 4,
            category: 'Beverage',
            name: 'goguma',
            price: 2.5,
            image: 'https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2019/12/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%EC%BD%94%EB%A6%AC%EC%95%84-%EC%B5%9C%EC%B4%88%EC%9D%98-%EA%B3%A0%EA%B5%AC%EB%A7%88-%EC%9D%8C%EB%A3%8C-%E2%80%98%EC%9E%90%EC%83%89-%EA%B5%B0%EA%B3%A0%EA%B5%AC%EB%A7%88-%EB%9D%BC%EB%96%BC%E2%80%99-%EC%B6%9C%EC%8B%9C2.jpg'
        },
        {
            id: 5,
            category: 'Beverage',
            name: 'Iced Tea',
            price: 3,
            image: 'https://img.freepik.com/premium-photo/a-glass-of-iced-tea-with-a-lemon-on-the-bottom_787273-2376.jpg'
        },
        {
            id: 6,
            category: 'Beverage',
            name: 'cocacola',
            price: 5,
            image: 'https://sitem.ssgcdn.com/02/78/59/item/1000039597802_i1_750.jpg'
        },
    ];

    const [selectedItems, setSelectedItems] = useState([]);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // 주문 핸들러
    const handleOrder = (menuItem) => {
        const existingItem = selectedItems.find(item => item.id === menuItem.id);

        if (existingItem) {
            // 이미 주문한 상품이라면 수량 증가
            const updatedItems = selectedItems.map(item =>
                item.id === menuItem.id ? {...item, quantity: item.quantity + 1} : item
            );
            setSelectedItems(updatedItems);
        } else {
            // 처음 주문하는 상품이라면 수량 1로 추가
            setSelectedItems([...selectedItems, {...menuItem, quantity: 1}]);
        }
    };

    const handleMenuItemClick = () => {
        // Simulate a click on the corresponding menu-button
        this.menuButton.click();
    };
    // 주문 삭제 핸들러
    const handleRemove = (index) => {
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1);
        setSelectedItems(updatedItems);
    };

    // 수량 증가 핸들러
    const handleIncrease = (index) => {
        const updatedItems = [...selectedItems];
        updatedItems[index].quantity += 1;
        setSelectedItems(updatedItems);
    };

    // 수량 감소 핸들러
    const handleDecrease = (index) => {
        const updatedItems = [...selectedItems];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity -= 1;
            setSelectedItems(updatedItems);
        }
    };

    // 현재 날짜와 시간 업데이트
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="app-container">
            <nav className="navbar">
                {/*로고 영역*/}
                <div className="logo-section">
                    <span className="nav_item">상품</span>
                    <span className="nav_item">주문 내역</span>
                    <span className="nav_item">마이페이지</span>
                </div>

                {/*날짜,시간 영역*/}
                <div className="date-time-section">
                    <p>{currentDateTime.toLocaleDateString()}</p>
                    <img src="https://cdn.imweb.me/upload/S2020020306340f9e8280d/f8ec551da8cb3.jpg" alt="Cafe Logo"
                         className="logo"/>
                </div>

            </nav>

            <div className="menu-main">
                <div className="menu-kategoria">
                    <div>기본 카테고리</div>
                    <div className="kategoria-row">
                        <div className="kategoria-list">커피</div>
                        <div className="kategoria-list">논커피</div>
                        <div className="kategoria-list">음료수</div>
                        <div className="kategoria-list">차</div>
                    </div>
                </div>
                <div className="menu-body">
                    <div className="menu-kategoria-name">커피</div>
                    <div className="menu-section">
                        {menuItems.map((menuItem) => (
                            <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                <div>{menuItem.name}</div>
                                <div>${menuItem.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*주문 내역*/}
            <div className="order-section">
                <div className="order-list">주문 내역</div>
                <ul>
                    {selectedItems.map((item, index) => (
                        <div className="app-container" key={index}>
                            <div className="prize_name">{item.name}</div>
                            <div className="prize_price">${item.price * item.quantity}</div>
                            <button className="prize_quantity_btn" onClick={() => handleDecrease(index)}>-</button>
                            <div className="prize_quantity">{item.quantity}</div>
                            <button className="prize_quantity_btn" onClick={() => handleIncrease(index)}>+</button>
                            <button className="prize_delete_btn" onClick={() => handleRemove(index)}>삭제</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
