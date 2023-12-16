// src/App.js


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
            image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001939]_20210225094313315.jpg'
        },
        {
            id: 4,
            category: 'Coffee',
            name: '라떼_(C)',
            price: 2.5,
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 5,
            category: 'Coffee',
            name: '바닐라 라떼_(H)',
            price: 3,
            image: 'https://i.namu.wiki/i/-Sl2bSDHOY8SWyvARR0fGipGgSfC6gzkmaJ92KfZ1vPWq9QiV9t5_JYQkYXHVBMmYEwTe3-6pTo825dMPGUzAA.webp'
        },
        {
            id: 6,
            category: 'Coffee',
            name: '바닐라 라떼_(C)',
            price: 5,
            image: 'https://cafedroptop.com/uploadimg/0.28103100_1594678243.jpg'
        },
        {
            id: 7,
            category: 'Coffee',
            name: '카라멜 라떼_(H)',
            price: 5,
            image: 'https://m.delightgarden.co.kr/file_data/sominter1133/2022/02/11/6b4ddcfeffbea2da29d882d78ddf6071.JPG'
        },
        {
            id: 8,
            category: 'Coffee',
            name: '카라멜 라떼_(C)',
            price: 5,
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 9,
            category: 'NonCoffee',
            name: '말차 라떼_(H)',
            price: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkO8s8C9yFd96qiyLBPw7324kD34mMuBHgIVg8BF92PxKcezz5trOuQjtUcpbqhy_1HF4&usqp=CAU'
        },
        {
            id: 10,
            category: 'NonCoffee',
            name: '말차 라떼_(C)',
            price: 5,
            image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA1MjBfNTUg/MDAxNjIxNDQwODM2MzEy.Ls5CKbqLphbAfxQX8r1-okwlv5MzNuhAKOm3GViDQcwg.6HS4uWVGqdATcYd_qrrQzv7HK2LFtr1f_aFbOiJdQicg.JPEG.kgyfjq/output_2525940195.jpg?type=w800'
        },
        {
            id: 11,
            category: 'NonCoffee',
            name: '진저 라떼_(C)',
            price: 3,
            image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjFfMTQ4/MDAxNTk1MzQyOTIyMDQ4.m3gd3bzOgNjXYcNwbN15IhKyXgi10uQbe7syVxQK-gMg.SlJBaZkezNZCvmZT2zJPge_5yNpD7Q-62CMjUARE48Ag.JPEG.shriya/%EC%95%84%EC%9D%B4%EC%8A%A4%EC%A7%84%EC%A0%80%EB%9D%BC%EB%96%BC%EB%A9%94%EC%9D%B86.jpg?type=w800'
        },
        {
            id: 12,
            category: 'NonCoffee',
            name: '진저 라떼_(H)',
            price: 3,
            image: 'https://mblogthumb-phinf.pstatic.net/MjAyMzAxMTVfMTI2/MDAxNjczNzY2MTY4OTI4.Hjo1ED6GXQvm2-hynIS0jl4OhzPB3i9-y4V-q35X99Ig.JPbaQKAB8y7V36N-xlyPLGZnQHO6Qd6fedQBTQ9ukQUg.JPEG.wait093/IMG_2172.jpg?type=w800'
        },
        {
            id: 13,
            category: 'Beveridge',
            name: '아이스티_(C)',
            price: 1,
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSExAQFRUWFxUTFhcSEhUWEhUVFhIWFxUVFhUYHSggGRolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUvLTUvLS0tLy0tNS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xAA5EAACAQIEAwUFBgUFAAAAAAAAAQIDEQQSITEFQVEGYXGBkQcTIjKhUrHB0fDxI0JiY6IVc5Ky4f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAxEQEAAgIBAwIDBwMFAQAAAAAAAQIDESEEEjEiQVFh8AUTFHGBkdEyocEjM0Kx8RX/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2BFo8RozeWNWDl0zJS9HqVi0T4Wmlo8wlFlQAAAAAAAAAAAAAAAAAAAAAAAAAax2p7Rzw8406Si5WUpOSbsm9FbyZ53XdZbDqKeVohD4Z20drVoX3+Knby+Fvx5nNh+1vbJH6x/CZqzk+NwdH30JxyvSLltmvazitb937np/iMc4/vInhEV55YvBcelJ5ZTcpOco5Y5ItJbO1vpmfmcmDr65PPnc8fX8teyJ8fX1+TIUcZUTlnXwW0bazPu0udkZJjmfCs0ifHlg+J8bnGrF70dpr3SqSjZaNWs+nM5r9TaLbjx+Tpp09Zrr3/PTN8I42qqWiSe104y84vVG+LqIvxLDJhmrMxqJnQwVoAAAAAAAAAAAAAAAAAAAAACmpNRV2BhMfxmKeTMr80nt4mGbqKY/Pltjw2ty0PjtX+NLZLS3wtK1uXXmfPdXeb5NptWYnUoKlaN1q+iv9Ovgc+omVUjAcRmneMU7NStl0vsmrczSJtuNe07V2l4Gu6VRTlW90t2nedWd9cuS2ubq9C/TxbHbum2o+Gvry17eIlf8A9edScVKWWLdlm0UVtdvm/I3p1FpmKzPDeuXH8Gam6FG8alRQU21Ju6lJ5doySdnZfeehE467rM/mayX5rCZSwlFpZatrarVuVuTtul3m1ceOI9NmU3v7w8xeKnCMrRnUyreF0m+ibKZMt68xzpNKVt8kKh2mxU6kacMOrtJvNGSiuqlK+niVxdXkvbt7V79NjrXumzbsJiM6vs07NHoRO3FMaXyUAAAAAAAAAAAAAAAAAAAh8Rbsv1zEphrUsVC7lFRtrq4pOTXe9/E8nLm7rT2+3yd9ccxHLF8XqU6yUXpNfLKNpKN3qvhfxeB5ebPW39Wv7f4bfhe6OGEp8Hm2viUtVrZrVvo3f9jDuiY9M8M56S0eZhLq4WonKlh272jm1y1Lt62tt8q57adS9I9U9m/r/pS+C1a7YDEynT3UovVO6yyvez7y9eZ1Lmmsx5eU51KlnC7aaV789HvyE9lZ5lpTBkvG6xuG51KjxEEs3u53umoqcoytq0mvhe+u+pEdVM6ifP1+z0/u4pMz5j6/ddq4SnRXvo1Ze8TTm6s7upHaSd9t3t4HRqsR3xb1fP3j3hnFrWnsmOPbXt8FD45d5Ust+run00K3629PTrXznn6/dP4WJ5leWPkk25T06Sa87Ivi6uYjcypbBG9RDJdkMTObm5SzJyeXTVK2zfPl9D1+jyWyVmZ8b4cfVUrWYiG0HY5AAAAAAAAAAAAAAAAAAAUVoJppq/d17gNJxnDWoZ4P3lNWyyWsopvVSW99d+h4fV9PfXdj9Vf7vUw5o3224liKM4xW8Xr3XPnZiKcy9LmVeExKzqeyT5rS3eKX/wBSJL09MwhY3tDCNeVSmk42tJr7N90/1yOya5JtMxxv+6tcGqxFkTifF6WIXwTk5xVnmg1eP1SsROPLFt2j9ff9W+LHFf6o4WcFJtW210et7dH1RWa906jy1vFazx4e1uJuDyJXlpmltGOumWzV39PEvGHs5tKkU7ufZcjipxtOrecJSTu3mt9m69DevdWImfDPsrO4rxK7On7zNPam/lzPKr21bb216a+BFrRube3wVjjVfdluEUZVaKlJyhynUlpFxvtFbyb8OZ1dP0EXr3W4j3/hx9Rmil+2vPwhvPA8PGNNSitGtO6PL13Pfx9vbHb4eRkme6e7yyRdmAAAAAAAAAAAAAAAAAAABzvEYudCrJQk002tOib8mjxsl7Yrz2vYpjrlpHc9eNpVrutQhJ850/hm/Fcys9TTJ/u13844lP3F8f8At2/SeYYvG8EwlT5MTODvdxqxutOSaSM4xdLv03mJ+f8ALevUdTWPVSJ/Jja3ZSu3elXws1/upN+Ny/4WLRxaJ/VP4yv/ACraP0XcF2UxMb3hTd9E1UjaKTd1e+t9OXIpk6PNNdU1z55g/GYd7mZ/aV9dkcXLWSpK0rx/jx2atZ27xH2fmikRGvz2n/6ODfv+y++zdS1qtXDLvdRPTba25aOjmseu9Y/VX8bG/wDTrb9kjDYPC0o5Xi79Y0YN8krJu9lpt3jt6esanJv8o/ypbJ1F53GP95/8V1MZQhrCld8pV3mflFFZ6jBi5x15+M8kYMt+LW4+EIdTGzqtOUm+i28oxWy7zmnqMma3qn6+TeMNMUcR9fN1DAUslKEPswjH0ikfTUr21iHzt57rTK+WVAAAAAAAAAAAAAAAAAAAA5v2op5cTUXV39UmeR1nF5e10c7xwxMX1/Jnl3dyLjMQ4v50/Ewt3ba0rEx4RJ4z+mL8HYRG/LTsWVj2n8j/AObNe2NcSfdpccRdXy+sjntNt63/ANo7NStyr9EvN7ERC/at0sRK+j0/pVjbu1CJpCTVnp39XuYb3O1YhL4NLPUgtdZRj3vU7ulpu8R83P1PppMuxI+pfLgAAAAAAAAAAAAAAAAAAAANF7c0MtZT5SivWLs/wPM66vO3q9Bb06adXl3s8fJOvD2KQx+L0szHHM24lvWFmc10L1rPxWR6kVvZ+prWZF/Dzj0fqZ5K2F2dRbJf+GcVnzs0k0ZIxtE7VnapaldK+Gd7GYNyxFNdG5vwir/fZHr/AGfWbZYef9oZIjFLqp9E+dAAAAAAAAAAAAAAAAAAAAAar29h8FN/1NPzV/wOTq49Lt6GfXLnONTu9PzPEyUjzD38dvihqN1b0uckzq23TCGmdGloWqlXuL1qbUUNXroWvxBCVKWmhhEc8p0U6rSFqRMo0vYWUnK70/XJCaRrUM5nTonYC0q02lpGFu9ttfkep9m15mXh/aXFYifi3w9d5AAAAAAAAAAAAAAAAAAAAADXu3FO+Gv9mcX63X4mHUxujq6OdZXNa9ZNanhZaTvh7+Ng8TjHfl5/mV+5j38uisqKFVNO65lb1mJ4awSSEbTC3VqRW25etbT5Tt7GqktvVkTSZk2vUa9+hnbHqEJmHW7MveIUvPDo3s1pfDVl3xj9Gz3vs+uqzL577Tt6ohup6LzAAAAAAAAAAAAAAAAAAAAAGJ7VU82FqruT9JJmeWN0ltgnWSHG+IXTZ5Voe/jljnZ6M5bxMTuHbST5VtdGfmWiPKrfY1inxIlZrci9SSUyYhEyl4VNamGSYnhMJMKz5DHjjbK8utezenbCuT/mqS9Eor77nudJXWN8319t5f0bWdLiAAAAAAAAAAAAAAAAAAAAAROL081CrHrCS/xZFo3C1J1aJcQ4hV19Tzb0e9iugzs02cVodtZQ6s2k3ciI3LSZRqM2rs0tEStWZhVPEJ7JIiKa8yd72nMTBtKpTtEymu7EzwyODmmo+rJpT1Swvbh2LsTSy4Ol35pesmz3cMapD5rqbbyyzpqwAAAAAAAAAAAAAAAAAAAAAU1I3TXVNeqA4HxVZZyXSTXozkyVevgt7sRVqnLbG7q5EStUT5tlIpMNe6JUrEaZdPxK/dzva/3ka0ojJFprJF4hV70RjlWcsKo1S0UhSbsjg8Q/wNK4oc98svoHgVHJhqMelOH/AFR6MRqHg3ndplPJVAAAAAAAAAAAAAAAAAAAAAAOFdsaWTEVl/cn6ZmY2h34b8NUryM5q6q3Q6kyna0i6370rNF4yaVOtciMek2zbeZzTtZ96uEx2qzdmOEwzTiurS+ppWGOS3D6SpQskuiS9EdDylQAAAAAAAAAAAAAAAAAAAAAADj3tIw+XEzfW0vWKKS6cU8Oe4opMOiJY6rIjS/cjuY0dz2Mho7l1MaR3L0Bo7m29iMN7zE0V/cj9Hf8C1YY5bcPoM1cQAAAAAAAAAAAAAAAAAAAAAAA5p7VMLacJ8pRt5x/crLbFLk+NWpV0MVVYTtYbBt7AC7ECRSQHRfZZg3PFwfKCc35KyXq0TDHLPDthdzAAAAAAAAAAAAAAAAAAAAAAADSfafSvSpy5Jzi+juk19z9SJaY/Li/EY6u31KOmGFrIJRWwiZVRYF2MglNwsddfoB1z2Q0v4lSVrJU7W6XnHnz2LQwyupFmAAAAAAAAAAAAAAAAAAAAAAAA1jt/TzYV90kRK+Py4ZxOOrKuqGBxBCUVkqiAuwZCWQwi1A7P7JKNqdWS5uEfTMy0MMrocWWYqwAAAAAAAAAAAAAAAAAAAAAPGBie1GFlUwtWMVeWVtK1726d5ErVnUvnzHzUr9dU097rQziYl2zSYYTERJQiyiShS2EPVMDIYSdt35kLafQfs0wzhgKcnFxc3KaurScW7RbXelddzRePDlyf1NqsSzVgAAAAAAAAAAAAAAAAAAAAAeMD0DRO2fs5pYxyrUJKlWesr391N9Wl8r716FLUieXRi6iacT4ck472Ix2Gbz4abS/mpp1IesdV5lNWh0Rkx2axUjkbUrJ9G7W8nqNp7Pg8o0XN2gnJ9IRcn6InuR2R7y2LhHYPiGIayYSrFP+asvdR/y1+g5lWbY6+ZdL7J+ySFJqpjakaslZqlTuqSa1+KTs5+GifO5aKfFjfPM8VdPjFJWSSS0SWyLud6B6AAAAAAAAAAAAAAAAAAAAAAA8aAAe3AonTi94p+KuAiktEkvBWAquAApbA9iBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k='
        },
        {
            id: 14,
            category: 'Beveridge',
            name: '아이스티_(H)',
            price: 1,
            image: 'https://masism.kr/wp-content/uploads/2021/01/T1-2.jpg'
        },
        {
            id: 15,
            category: 'Beveridge',
            name: '코카콜라',
            price: 1,
            image: 'https://contents.lotteon.com/itemimage/LO/10/22/53/95/91/_1/02/25/39/59/2/LO1022539591_1022539592_1.jpg/dims/resizef/720X720'
        },
        {
            id: 16,
            category: 'Beveridge',
            name: '솔의눈',
            price: 1,
            image: 'https://msimage.lottechilsung.co.kr/goods/31/12/85/07/1861_N_N_M.jpg'
        },
        {
            id: 17,
            category: 'Tea',
            name: '생강차',
            price: 3,
            image: 'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2016/09/02/c_km601/567813_280.jpg'
        },
        {
            id: 18,
            category: 'Tea',
            name: '페퍼민트',
            price: 0,
            image: 'https://health.chosun.com/site/data/img_dir/2023/03/07/2023030702209_0.jpg',
        },
        {
            id: 19,
            category: 'Tea',
            name: '루이보스',
            price: 0,
            image: 'https://health.chosun.com/site/data/img_dir/2023/03/07/2023030702209_0.jpg',
        },
        {
            id: 20,
            category: 'Tea',
            name: '로즈마리',
            price: 0,
            image: 'https://health.chosun.com/site/data/img_dir/2023/03/07/2023030702209_0.jpg',
        },
        {
            id: 21,
            category: 'Tea',
            name: '캐모마일',
            price: 0,
            image: 'https://health.chosun.com/site/data/img_dir/2023/03/07/2023030702209_0.jpg',
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
                        {menuItems
                            .filter((menuItem) => menuItem.category === 'Coffee') // 카테고리가 'Coffee'인 아이템만 필터링
                            .map((menuItem) => (
                                <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                    <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                    <div>{menuItem.name}</div>
                                    <div>${menuItem.price}</div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="menu-body">
                    <div className="menu-kategoria">논커피</div>
                    <div className="menu-section">
                        {menuItems
                            .filter((menuItem) => menuItem.category === 'NonCoffee') // 카테고리가 'Coffee'인 아이템만 필터링
                            .map((menuItem) => (
                                <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                    <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                    <div>{menuItem.name}</div>
                                    <div>${menuItem.price}</div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="menu-body">
                    <div className="menu-kategoria">음료</div>
                    <div className="menu-section">
                        {menuItems
                            .filter((menuItem) => menuItem.category === 'Beveridge') // 카테고리가 'Coffee'인 아이템만 필터링
                            .map((menuItem) => (
                                <div key={menuItem.id} className="menu-item" onClick={() => handleOrder(menuItem)}>
                                    <img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
                                    <div>{menuItem.name}</div>
                                    <div>${menuItem.price}</div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="menu-body">
                    <div className="menu-kategoria">차</div>
                    <div className="menu-section">
                        {menuItems
                            .filter((menuItem) => menuItem.category === 'Tea') // 카테고리가 'Coffee'인 아이템만 필터링
                            .map((menuItem) => (
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
                <div className="order-header">주문 내역</div>
                <div className="order-container">
                    {selectedItems.map((item, index) => (
                        <div className="order-box" key={index}>
                            <div className="order-item-left">
                                <div className="order_name">{item.name}</div>
                                <div className="order_price">${item.price * item.quantity}</div>
                            </div>
                            <div className="order-item-middle">
                                <button className="order_quantity_btn" onClick={() => handleDecrease(index)}>-</button>
                                <div className="order_quantity">{item.quantity}</div>
                                <button className="order_quantity_btn" onClick={() => handleIncrease(index)}>+</button>
                            </div>
                            <button className="order_delete_btn" onClick={() => handleRemove(index)}>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
