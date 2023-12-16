// src/App.js
//김민서
// 임재혁

import React, {useState, useEffect} from 'react';
import './App.css'; // 스타일 파일 추가

function App() {
    // 커피와 음료수 메뉴 아이템과 주문 내역을 관리하기 위한 state
    const menuItems = [
        {
            id: 1,
            category: 'Coffee',
            name: '아메리카노_(H)',
            price: 3,
            image: 'https://i.pinimg.com/564x/83/28/b6/8328b6f35d523c0dced5872e3ed2624b.jpg'
        },
        {
            id: 2,
            category: 'Coffee',
            name: '아메리카노_(C)',
            price: 4,
            image: 'https://i.pinimg.com/564x/75/f5/7f/75f57fbd46dc00f52c2145dad31b533f.jpg'
        },
        {
            id: 3,
            category: 'Coffee',
            name: '라떼_(H)',
            price: 4.5,
            image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA1MjBfNTUg/MDAxNjIxNDQwODM2MzEy.Ls5CKbqLphbAfxQX8r1-okwlv5MzNuhAKOm3GViDQcwg.6HS4uWVGqdATcYd_qrrQzv7HK2LFtr1f_aFbOiJdQicg.JPEG.kgyfjq/output_2525940195.jpg?type=w800'
        },
        {
            id: 4,
            category: 'Coffee',
            name: '라떼_(C)',
            price: 2.5,
            image: ''
        },
        {
            id: 5,
            category: 'Coffee',
            name: '바닐라 라떼_(H)',
            price: 3,
            image: 'https://img.freepik.com/premium-photo/a-glass-of-iced-tea-with-a-lemon-on-the-bottom_787273-2376.jpg'
        },
        {
            id: 6,
            category: 'Coffee',
            name: '바닐라 라떼_(C)',
            price: 5,
            image: 'https://sitem.ssgcdn.com/02/78/59/item/1000039597802_i1_750.jpg'
        },
        {
            id: 7,
            category: 'Coffee',
            name: '카라멜 라떼_(H)',
            price: 5,
            image: 'https://sitem.ssgcdn.com/02/78/59/item/1000039597802_i1_750.jpg'
        },
        {
            id: 8,
            category: 'Coffee',
            name: '카라멜 라떼_(C)',
            price: 5,
            image: 'https://sitem.ssgcdn.com/02/78/59/item/1000039597802_i1_750.jpg'
        },
        {
            id: 9,
            category: 'NonCoffee',
            name: '말차 라떼_(H)',
            price: 5,
            image: 'https://sitem.ssgcdn.com/02/78/59/item/1000039597802_i1_750.jpg'
        },
        {
            id: 10,
            category: 'Coffee',
            name: '말차 라떼_(C)',
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

            <div className="kategoria">
                <div>기본 카테고리</div>
                <div className="kategoria-row">
                    <div className="kategoria-item">커피</div>
                    <div className="kategoria-item">논커피</div>
                    <div className="kategoria-item">음료수</div>
                    <div className="kategoria-item">차</div>
                </div>
            </div>
            <div className="menu-main">
                <div className="menu-body">
                    <div className="menu-kategoria">커피</div>
                    <div className="menu-section">
                        {menuItems.map((menuItem) => (
                            <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                <div className="menu_name">{menuItem.name}</div>
                                <div>${menuItem.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="menu-body">
                    <div className="menu-kategoria">커피</div>
                    <div className="menu-section">
                        {menuItems.map((menuItem) => (
                            <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                <div className="menu_name">{menuItem.name}</div>
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
