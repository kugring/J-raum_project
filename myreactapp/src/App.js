// src/App.js


import React, {useState, useEffect, useRef} from 'react';
import './App.css'; // 스타일 파일 추가
import {FaPlus, FaMinus} from "react-icons/fa6";
import {IoClose} from "react-icons/io5";
import Modal from "./Modal";

function App() {
	// 커피와 음료수 메뉴 아이템과 주문 내역을 관리하기 위한 state
	const menuItems = [
		{
			id: 1,
			category: '커피',
			name: '아메리카노_(H)',
			en: 'hot-americano',
			deg: 'hot',
			price: 1000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[94]_20210430103337006.jpg'
		},
		{
			id: 2,
			category: '커피',
			name: '아메리카노_(C)',
			en: 'cold-americano',
			deg: 'cold',
			price: 1000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg'
		},
		{
			id: 3,
			category: '커피',
			name: '라떼_(H)',
			en: 'hot-latte',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg'
		},
		{
			id: 4,
			category: '커피',
			name: '라떼_(C)',
			en: 'cold-latte',
			deg: 'cold',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110569]_20210415143035989.jpg'
		},
		{
			id: 5,
			category: '커피',
			name: '카라멜 라떼_(H)',
			en: 'hot-caramel-latte',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154609863.jpg'
		},
		{
			id: 6,
			category: '커피',
			name: '카라멜 라떼_(C)',
			en: 'cold-caramel-latte',
			deg: 'cold',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110582]_20210415142706078.jpg'
		},
		{
			id: 7,
			category: '커피',
			name: '에스프레소_(H)',
			en: 'cold-espresso',
			deg: 'hot',
			price: 1000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[20]_20210415144112678.jpg'
		},
		{
			id: 8,
			category: '커피',
			name: '디카페인_(H)',
			en: 'cold-espresso',
			deg: 'hot',
			price: 1000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg'
		},
		{
			id: 9,
			category: '커피',
			name: '바닐라 라떼_(H)',
			en: 'hot-vanilla-latte',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001939]_20210225094313315.jpg'
		},
		{
			id: 10,
			category: '커피',
			name: '바닐라 라떼_(C)',
			en: 'cold-vanilla-latte',
			deg: 'cold',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001941]_20210225094346653.jpg'
		},
		{
			id: 11,
			category: '커피',
			name: '아포카토_(C)',
			en: 'cold-Affogato',
			deg: 'cold',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001631]_20210225090916684.jpg'
		},
		{
			id: 20,
			category: '논커피',
			name: '핫초코(H)',
			en: 'hot-choko',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002594]_20210422080327783.jpg'
		},
		{
			id: 21,
			category: '논커피',
			name: '아이스초코_(C)',
			en: 'cold-choko',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003658]_20210422080248176.jpg'
		},
		{
			id: 14,
			category: '논커피',
			name: '진저 라떼_(H)',
			en: 'hot-ginger-latte',
			deg: 'hot',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110612]_20210415133425373.jpg'
		},
		{
			id: 15,
			category: '논커피',
			name: '진저 라떼_(C)',
			en: 'cold-ginger-latte',
			deg: 'cold',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2022/02/[9200000002966]_20220203082502987.jpg'
		},
		{
			id: 12,
			category: '논커피',
			name: '말차 라떼_(H)',
			en: 'hot-matcha-latte',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002496]_20210419131039350.jpg'
		},
		{
			id: 13,
			category: '논커피',
			name: '말차 라떼_(C)',
			en: 'cold-matcha-latte',
			deg: 'cold',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002499]_20210419130902541.jpg'
		},
		{
			id: 16,
			category: '논커피',
			name: '흑임자 라떼_(H)',
			en: 'hot-sesame-latte',
			deg: 'cold',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000001301]_20200921171639781.jpg'
		},
		{
			id: 17,
			category: '논커피',
			name: '흑임자 라떼_(C)',
			en: 'cold-sesame-latte',
			deg: 'cold',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002088]_20200921171733532.jpg'
		},
		{
			id: 23,
			category: '논커피',
			name: '아이스티_(C)',
			en: 'cold-tea',
			deg: 'cold',
			price: 1000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000039]_20210415142055860.jpg'
		},
		{
			id: 22,
			category: '논커피',
			name: '스팀우유_(H)',
			en: 'hot-milk',
			deg: 'hot',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[17]_20210426095334934.jpg'
		},
		{
			id: 18,
			category: '논커피',
			name: '고구마 라떼_(H)',
			en: 'hot-goguma-latte',
			deg: 'cold',
			price: 3000,
			image: 'https://cdn.imweb.me/thumbnail/20230524/4730c49ef9951.png'
		},
		{
			id: 19,
			category: '논커피',
			name: '고구마 라떼_(C)',
			en: 'cold-goguma-latte',
			deg: 'cold',
			price: 3000,
			image: 'https://cdn.imweb.me/thumbnail/20230524/cecb448b8d0f2.png'
		},
		{
			id: 24,
			category: '차',
			name: '캐모마일',
			en: 'hot-chamomile',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000076]_20210415154920731.jpg',
		},
		{
			id: 25,
			category: '차',
			name: '페퍼민트',
			en: 'hot-peppermint',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[400400000091]_20210415132229904.jpg',
		},
		{
			id: 26,
			category: '차',
			name: '루이보스',
			en: 'hot-rooibos',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000226]_20210415144434521.jpg',
		},
		{
			id: 27,
			category: '차',
			name: '로즈마리',
			en: 'hot-rosemary',
			price: 2000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000187]_20210419131229539.jpg',
		},
		{
			id: 28,
			category: '차',
			name: '생강차',
			en: 'hot-saenggangcha',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000056]_20210415135215632.jpg'
		},
		{
			id: 29,
			category: '차',
			name: '오미자',
			en: 'hot-omija',
			price: 3000,
			image: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000016]_20210415153648533.jpg'
		},
		{
			id: 30,
			category: '음료수',
			name: '코카콜라',
			en: 'cold-cola',
			price: 1000,
			image: 'https://i.pinimg.com/564x/39/20/03/39200371c762878e442ebb68dd5c8479.jpg'
		},
		{
			id: 31,
			category: '음료수',
			name: '솔의눈',
			en: 'cold-pine-bud',
			price: 1000,
			image: 'https://shop-phinf.pstatic.net/20230707_290/1688695270368h7x0b_JPEG/13323114186995070_433747382.jpg?type=m510'
		},
		{
			id: 32,
			category: '음료수',
			name: '꼬마음료',
			en: 'cold-kids',
			price: 1000,
			image: 'https://shop-phinf.pstatic.net/20230227_108/167747612443621Hq0_PNG/4778808286398016_823162236.png?type=m510'
		}
	];

	const [selectedItems, setSelectedItems] = useState([]);
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [isAnimating, setIsAnimating] = useState(false);

	// 주문 핸들러
	const handleOrder = (menuItem) => {
		const existingItem = selectedItems.find(item => item.id === menuItem.id);

		if (existingItem) {
			// 이미 주문한 상품이라면 수량 증가
			const updatedItems = selectedItems.map(item =>
				item.id === menuItem.id ? {...item, quantity: item.quantity + 1} : item
			);
			console.log(selectedItems)
			setSelectedItems(updatedItems);
			const elements = document.querySelectorAll(`.${menuItem.en}`);
			elements.forEach(element => {
				element.classList.add('animate');
			});

			const timeoutId = setTimeout(() => {
				elements.forEach(element => {
					element.classList.remove('animate');
				});
				setIsAnimating(false); // 상태 업데이트
			}, 300); // 1초(1000ms) 후에 실행
			// 컴포넌트가 언마운트되거나 다시 렌더링되기 전에 타이머를 클리어
			return () => clearTimeout(timeoutId);
		} else {
			// 처음 주문하는 상품이라면 수량 1로 추가
			setSelectedItems([...selectedItems, {...menuItem, quantity: 1}]);
		}
		const totalQuantity = selectedItems.reduce((acc, item) => acc + item.quantity, 0);
	};

	const handleRemove = (index) => {
		const updatedItems = [...selectedItems];
		updatedItems.splice(index, 1);
		setSelectedItems(updatedItems);
	};

	// 수량 증가 핸들러
	const handleIncrease = (index) => {
		const updatedItems = [...selectedItems];
		updatedItems[index].quantity += 1;
	};

	const handleDecrease = (index) => {
		const updatedItems = [...selectedItems];

		if (updatedItems[index].quantity > 1) {
			updatedItems[index].quantity -= 1;
		} else {
			// 수량이 1일 때, 아이템 삭제
			updatedItems.splice(index, 1);
		}
		setSelectedItems(updatedItems);
	};


	// 현재 날짜와 시간 업데이트
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(new Date());
		});

		return () => clearInterval(intervalId);
	}, []);


	const categoryRefs = {
		'커피': useRef(null),
		'논커피': useRef(null),
		'차': useRef(null),
		'음료수': useRef(null),
	};

	const [selectedCategory, setSelectedCategory] = useState(null);

	// useEffect를 사용하여 스크롤 이벤트를 감지
	useEffect(() => {
		const handleScroll = () => {
			// 스크롤 이벤트가 발생할 때 현재 선택된 카테고리의 border 값을 변경
			if (selectedCategory) {
				const ref = categoryRefs[selectedCategory];
				if (ref && ref.current) {
					ref.current.style.border = '2px solid red'; // 변경할 스타일 지정
				}
			}
		};

		// 스크롤 이벤트 리스너 등록
		window.addEventListener('scroll', handleScroll);

		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [selectedCategory]); // selectedCategory가 변경될 때마다 useEffect가 실행

	const selectedRef = useRef(null);
	const handleScroll = (category) => {
		const ref = categoryRefs[category];
		if (ref && ref.current) {
			ref.current.scrollIntoView({behavior: 'smooth'});
		}
		// 이전에 선택된 요소의 스타일 초기화
		if (selectedRef.current) {
			selectedRef.current.style.border = '1px solid #000'; // 이전 스타일로 초기화
		}

		// 클릭한 요소의 스타일 변경
		if (ref.current) {
			ref.current.style.border = '2px solid red'; // 변경할 스타일 지정
			selectedRef.current = ref.current; // 선택된 요소 저장
		}

		// 현재 선택된 카테고리 업데이트
		setSelectedCategory(category);
		console.log('please')


	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// 스크롤 이동에 관련 콘스트


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
				<div className="nav-left">
					<div className="date-time-section">{currentDateTime.toLocaleDateString()}</div>
					<img src="https://cdn.imweb.me/upload/S2020020306340f9e8280d/f8ec551da8cb3.jpg" alt="Cafe Logo"
						 className="logo"/></div>
			</nav>
			<div>
				<div className="kategoria">
					<div className="kategoria-left">기본 카테고리</div>
					<div className="kategoria-row">
						{Object.keys(categoryRefs).map((category) => (
							<div
								key={category}
								className={`kategoria-item`}
								onClick={() => handleScroll(category)}
							>
								{category}
							</div>
						))}
					</div>
				</div>
				<div className="menu-main">
					<div className="menu-box">
						{Object.keys(categoryRefs).map((category) => (
							<div key={category} className="menu-body">
								<div className="menu-kategoria-box" ref={categoryRefs[category]}>
									<div className="menu-kategoria">
										{category}
									</div>
								</div>
								<div className="menu-section">
									{menuItems
										.filter((menuItem) => menuItem.category === category)
										.map((menuItem) => (
											<div
												key={menuItem.id}
												className={`menu-item ${menuItem.en}`}
												onClick={() => {
													handleOrder(menuItem);
												}}
											>
												<img className="menu-image" src={menuItem.image} alt={menuItem.name}/>
												<div className="menu-card-body">
													<div className="menu_name">
														{menuItem.name}
													</div>
													<div className="menu-price">{menuItem.price}원
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/*주문 내역*/}
			<div className="order-section">
				<div className="order-header">
					<div className="order-header-left">
						주문 내역
					</div>
					<div className="order-total">
						<div>합계:</div>
						<div
							className="order-total-num">{selectedItems.reduce((acc, item) => acc + item.quantity, 0)}</div>
						<div>잔</div>
					</div>
				</div>
				<div className="order-container">

					{selectedItems.slice().reverse().map((item, index) => (
						<div className={`order-box ${item.en}`}>
							<Modal isOpen={isModalOpen} onClose={closeModal} option={item.en}>
								<h2>${item.en}</h2>
							</Modal>
							<div className="order-item-top">
								<div className="order_name">{item.name}</div>
								<div className="order-item-close"
									 onClick={() => handleRemove(selectedItems.length - index - 1)}><IoClose/></div>
							</div>
							<div className="order-item-body">
								<img className="order-item-img" src={item.image} alt={item.name}/>
								<div className="order-item-body-middle">
									<div className="order_price">{item.price * item.quantity}원</div>
									<div className="order-item-option" onClick={() => {
										openModal();
									}}>옵션변경
									</div>
								</div>
								<div className="order-item-body-right">
									<div className="order-item-counter">
										<div className="order_quantity_btn"
											 onClick={() => handleDecrease(selectedItems.length - index - 1)}>
											<FaMinus/>
										</div>
										<div className="order_quantity">{item.quantity}</div>
										<div className="order_quantity_btn"
											 onClick={() => handleIncrease(selectedItems.length - index - 1)}>
											<FaPlus/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="order-pay-container">
					<div className="order-pay-box">페이지 박스</div>
				</div>
			</div>
		</div>
	);
}

export default App;