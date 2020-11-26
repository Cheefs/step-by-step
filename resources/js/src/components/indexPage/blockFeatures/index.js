import React from "react";
import styled from "styled-components";

const Grid = styled( "div" )`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 20px;
    text-align: center;
`;

const Article = styled( "article" )`
    display: grid;
    gap: 15px;
    grid-template-rows: 140px 20px auto;
    align-items: end;
    justify-content: center;
    max-width: 266px;
    min-height: 292px;
    height: fit-content;
    padding: 0px 67px;

    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);

    .title, .text {
        margin: 0;
    }

    .text {
        align-self: start;
    }
`;

export function Features() {
    return (
        <Grid>
            <Article>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M94.3613 47.9258C90.2188 29.1972 83.9844 19.2012 74.7363 16.4707C72.7924 15.9005 70.7759 15.6156 68.75 15.625C66.0723 15.625 63.7402 16.2773 61.2734 16.9687C58.3008 17.8027 54.9238 18.75 50 18.75C45.0762 18.75 41.6973 17.8047 38.7187 16.9707C36.25 16.2773 33.9199 15.625 31.25 15.625C29.1551 15.6177 27.0694 15.9017 25.0527 16.4687C15.8535 19.1875 9.62304 29.1797 5.41992 47.914C0.900385 68.0742 3.12499 80.8027 11.6582 83.7558C12.8279 84.1681 14.0586 84.3807 15.2988 84.3848C21.1445 84.3848 25.832 79.5156 29.0352 75.5293C32.6543 71.0176 36.8906 68.7285 50 68.7285C61.709 68.7285 66.5547 70.3164 70.7402 75.5293C73.3711 78.8066 75.8574 81.0996 78.3379 82.543C81.6367 84.4609 84.9336 84.8867 88.1348 83.7871C93.1777 82.0664 96.0684 77.5176 96.7285 70.2637C97.2305 64.7012 96.457 57.3945 94.3613 47.9258ZM40.625 46.875H34.375V53.125C34.375 53.9538 34.0458 54.7486 33.4597 55.3347C32.8737 55.9207 32.0788 56.25 31.25 56.25C30.4212 56.25 29.6263 55.9207 29.0403 55.3347C28.4542 54.7486 28.125 53.9538 28.125 53.125V46.875H21.875C21.0462 46.875 20.2513 46.5457 19.6653 45.9597C19.0792 45.3736 18.75 44.5788 18.75 43.75C18.75 42.9212 19.0792 42.1263 19.6653 41.5403C20.2513 40.9542 21.0462 40.625 21.875 40.625H28.125V34.375C28.125 33.5462 28.4542 32.7513 29.0403 32.1653C29.6263 31.5792 30.4212 31.25 31.25 31.25C32.0788 31.25 32.8737 31.5792 33.4597 32.1653C34.0458 32.7513 34.375 33.5462 34.375 34.375V40.625H40.625C41.4538 40.625 42.2487 40.9542 42.8347 41.5403C43.4208 42.1263 43.75 42.9212 43.75 43.75C43.75 44.5788 43.4208 45.3736 42.8347 45.9597C42.2487 46.5457 41.4538 46.875 40.625 46.875ZM57.0312 47.6562C56.2587 47.6562 55.5034 47.4271 54.861 46.9979C54.2187 46.5687 53.718 45.9586 53.4223 45.2448C53.1267 44.5311 53.0493 43.7456 53.2001 42.9879C53.3508 42.2302 53.7228 41.5341 54.2691 40.9878C54.8154 40.4415 55.5114 40.0695 56.2692 39.9188C57.0269 39.7681 57.8123 39.8454 58.5261 40.1411C59.2399 40.4367 59.85 40.9374 60.2792 41.5798C60.7084 42.2222 60.9375 42.9774 60.9375 43.75C60.9375 44.786 60.526 45.7796 59.7934 46.5121C59.0608 47.2447 58.0673 47.6562 57.0312 47.6562ZM65.625 56.25C64.852 56.25 64.0964 56.0206 63.4538 55.591C62.8112 55.1613 62.3105 54.5507 62.0152 53.8363C61.7198 53.122 61.643 52.3361 61.7945 51.5781C61.9461 50.8201 62.3191 50.1241 62.8663 49.5781C63.4136 49.0322 64.1106 48.661 64.8689 48.5114C65.6273 48.3617 66.413 48.4405 67.1266 48.7376C67.8402 49.0348 68.4496 49.537 68.8777 50.1806C69.3057 50.8243 69.5332 51.5805 69.5312 52.3535C69.5287 53.3878 69.116 54.3789 68.3837 55.1093C67.6514 55.8398 66.6593 56.25 65.625 56.25ZM65.625 39.0625C64.8524 39.0625 64.0972 38.8334 63.4548 38.4042C62.8124 37.9749 62.3117 37.3649 62.0161 36.6511C61.7204 35.9373 61.6431 35.1519 61.7938 34.3942C61.9445 33.6364 62.3166 32.9404 62.8629 32.3941C63.4092 31.8478 64.1052 31.4758 64.8629 31.325C65.6207 31.1743 66.4061 31.2517 67.1199 31.5473C67.8336 31.843 68.4437 32.3437 68.8729 32.986C69.3022 33.6284 69.5312 34.3836 69.5312 35.1562C69.5312 36.1922 69.1197 37.1858 68.3871 37.9184C67.6546 38.6509 66.661 39.0625 65.625 39.0625ZM74.2188 47.6562C73.4462 47.6562 72.6909 47.4271 72.0486 46.9979C71.4062 46.5687 70.9055 45.9586 70.6098 45.2448C70.3142 44.5311 70.2368 43.7456 70.3876 42.9879C70.5383 42.2302 70.9103 41.5341 71.4566 40.9878C72.0029 40.4415 72.6989 40.0695 73.4567 39.9188C74.2144 39.7681 74.9998 39.8454 75.7136 40.1411C76.4274 40.4367 77.0375 40.9374 77.4667 41.5798C77.8959 42.2222 78.125 42.9774 78.125 43.75C78.125 44.786 77.7135 45.7796 76.9809 46.5121C76.2483 47.2447 75.2548 47.6562 74.2188 47.6562Z" fill="#4791DB"/>
                    </svg>
                </div>

                <h3 className="title">Обучение в игровой форме</h3>
                <p className="text">Игровая механика доказала свою эффективность для всех возрастов</p>
            </Article>
            <Article>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M89.8438 46.875H62.5C60.0136 46.875 57.629 45.8873 55.8709 44.1291C54.1127 42.371 53.125 39.9864 53.125 37.5V10.1562C53.125 9.94905 53.0427 9.75034 52.8962 9.60382C52.7497 9.45731 52.5509 9.375 52.3438 9.375H41.9434C41.5786 8.69949 41.1537 8.05822 40.6738 7.45898C38.4219 4.66406 35.0762 3.125 31.25 3.125C23.8906 3.125 18.75 8.9082 18.75 17.1875V45.3125C18.75 50.1953 22.7227 53.125 26.5625 53.125C27.5916 53.1362 28.6125 52.9418 29.5655 52.5532C30.5184 52.1646 31.3841 51.5895 32.1118 50.8618C32.8395 50.1341 33.4146 49.2684 33.8032 48.3155C34.1918 47.3625 34.3862 46.3416 34.375 45.3125V15.625C34.375 14.7962 34.0458 14.0013 33.4597 13.4153C32.8737 12.8292 32.0788 12.5 31.25 12.5C30.4212 12.5 29.6263 12.8292 29.0403 13.4153C28.4542 14.0013 28.125 14.7962 28.125 15.625V45.3125C28.1318 45.5195 28.096 45.7257 28.0199 45.9184C27.9438 46.111 27.8289 46.286 27.6825 46.4325C27.536 46.5789 27.361 46.6938 27.1684 46.7699C26.9757 46.846 26.7695 46.8818 26.5625 46.875C26.127 46.875 25 46.5938 25 45.3125V17.1875C25 13.4102 26.6426 9.375 31.25 9.375C37.0488 9.375 37.5 15.2637 37.5 17.0664V44.166C37.5 47.5742 36.4316 50.6562 34.4902 52.8496C32.5195 55.0781 29.7793 56.25 26.5625 56.25C23.3457 56.25 20.6055 55.0781 18.6348 52.8496C16.6934 50.6562 15.625 47.5742 15.625 44.166V28.125C15.625 27.2962 15.2958 26.5013 14.7097 25.9153C14.1237 25.3292 13.3288 25 12.5 25C11.6712 25 10.8763 25.3292 10.2903 25.9153C9.70424 26.5013 9.375 27.2962 9.375 28.125V44.166C9.375 54.2266 15.8574 61.6719 25 62.4336V84.375C25 87.6902 26.317 90.8696 28.6612 93.2138C31.0054 95.558 34.1848 96.875 37.5 96.875H78.125C81.4402 96.875 84.6196 95.558 86.9638 93.2138C89.308 90.8696 90.625 87.6902 90.625 84.375V47.6562C90.625 47.4491 90.5427 47.2503 90.3962 47.1038C90.2497 46.9573 90.0509 46.875 89.8438 46.875Z" fill="#4791DB"/>
                        <path d="M62.5 40.6249H87.8535C87.9305 40.6246 88.0057 40.6015 88.0697 40.5586C88.1336 40.5157 88.1834 40.4548 88.2128 40.3836C88.2423 40.3124 88.25 40.2341 88.2351 40.1586C88.2201 40.083 88.1832 40.0136 88.1289 39.9589L60.041 11.871C59.9864 11.8167 59.9169 11.7798 59.8414 11.7649C59.7658 11.7499 59.6875 11.7577 59.6164 11.7871C59.5452 11.8165 59.4843 11.8663 59.4414 11.9303C59.3984 11.9942 59.3753 12.0694 59.375 12.1464V37.4999C59.375 38.3287 59.7042 39.1236 60.2903 39.7097C60.8763 40.2957 61.6712 40.6249 62.5 40.6249Z" fill="#4791DB"/>
                    </svg>
                </div>

                <h3 className="title">Понятные задания</h3>
                <p className="text">Наша миссия — сделать обучения доступным для каждого</p>
            </Article>
            <Article>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.9687 12.6133C61.168 8.50977 55.8594 6.25 50 6.25C44.1094 6.25 38.7832 8.49609 35 12.5742C31.1758 16.6973 29.3125 22.3008 29.75 28.3516C30.6172 40.2891 39.7012 50 50 50C60.2988 50 69.3672 40.291 70.248 28.3555C70.6914 22.3594 68.8164 16.7676 64.9687 12.6133ZM84.375 93.75H15.625C14.7251 93.7617 13.8339 93.5727 13.0163 93.1966C12.1987 92.8206 11.4752 92.267 10.8984 91.5762C9.62889 90.0586 9.11718 87.9863 9.49608 85.8906C11.1445 76.7461 16.2891 69.0645 24.375 63.6719C31.5586 58.8848 40.6582 56.25 50 56.25C59.3418 56.25 68.4414 58.8867 75.625 63.6719C83.7109 69.0625 88.8554 76.7441 90.5039 85.8887C90.8828 87.9844 90.3711 90.0566 89.1015 91.5742C88.525 92.2654 87.8015 92.8194 86.9839 93.1957C86.1663 93.5721 85.275 93.7615 84.375 93.75Z" fill="#4791DB"/>
                    </svg>
                </div>
                <h3 className="title">Персональная программа</h3>
                <p className="text">Учись по программе, созданной экспертами в образовании</p>
            </Article>
        </Grid>

    );
}
