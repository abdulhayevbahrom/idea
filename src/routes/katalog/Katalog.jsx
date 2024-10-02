import React from 'react';
import './Katalog.css';
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Katalog() {
    return (
        <div className='katalog'>
            <div className="left">
                <div className="left_items">
                    <span>Smartfonlar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>TV, audio va video</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Maishiy texnika</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Go'zallik va so'glik</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Noutbuklar va kompyuterlar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Gadjetlar va aksessuarlar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Avto zona</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Sport uchun buyumlar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Ta'mirlash uchun asboblar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Bolalar uchun tovarlar</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Video kuzatuv tizimlari</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Ofis va uy uchun mebel</span>
                    <FaChevronRight />
                </div>
                <div className="left_item">
                    <span>Oshxona buyumlari</span>
                    <FaChevronRight />
                </div>
            </div>
            <div className="medium">
                <h1>Smartfonlar</h1>
                <Link>
                    <b>Smartfonlar</b>
                    <p>Smartfonlar Apple</p>
                    <p>Smartfonlar Samsung</p>
                    <p>Smartfonlar Huawei</p>
                    <p>Smartfonlar Xiaomi</p>
                    <p>Smartfonlar VIVO</p>
                    <span>Koʻproq koʻrsatish </span>
                </Link>
            </div>
            <div className="right">
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2FVlbipwyR4POdMZBWy9UI.webp&w=1920&q=75" alt="" />
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2Fvl2x6FxCaPsisUdfkX7q.png&w=1920&q=75" alt="" />
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2FI7MJ8vnyeIbWI40BVWMv.webp&w=1920&q=75" alt="" />
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2FgmLJt9ajbXdwF0GFxxTs.webp&w=1920&q=75" alt="" />
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2FZsk7UtfBBqaevlYEPUn5.webp&w=1920&q=75" alt="" />
                <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fbrands%2FOctober2022%2FI0Q6pgGclOpJ8tqlQS0G.png&w=1920&q=75" alt="" />
            </div>
        </div>
    )
}

export default Katalog