import {useEffect, useState} from "react";
import MyInfo from "./MyInfo.jsx";
import {
    retrieveBadWordsWarningCountApiRequest,
    retrieveCookieWalletApiRequest,
    retrieveMemberApiRequest
} from "../../api_service/DevtoonApiService.js";

function MyPage() {
    const bodyContainer = {
        display: 'flex',
    };

    const sideBar = {
        flex: '1',
    }

    const myInfoContent = {
        marginTop: '50px',
        flex: '4',
    }

    const myInfoTitle = {
        marginBottom: '20px'
    }

    const [myInfo, setMyInfo] = useState([])
    const [myWarningCount, setMyWarningCount] = useState([])
    const [myCookieQuantity, setMyCookieQuantity] = useState([])

    const memberId = 1

    useEffect(() => {
        retrieveMemberApiRequest(memberId)
            .then((response) => {
                setMyInfo(response.data.data)
            })
    }, []);

    useEffect(() => {
        retrieveBadWordsWarningCountApiRequest(memberId)
            .then((response) => {
                setMyWarningCount(response.data.data)
            })
    }, []);

    useEffect(() => {
        retrieveCookieWalletApiRequest(memberId)
            .then((response) => {
                setMyCookieQuantity(response.data.data)
            })
    }, []);

    return (
        <div style={bodyContainer}>
            <div style={sideBar}></div>
            <div style={myInfoContent}>
                <div style={myInfoTitle}>마이 페이지</div>
                <MyInfo
                    myInfo={myInfo}
                    myWarningCount={myWarningCount}
                    myCookieQuantity={myCookieQuantity}
                />
            </div>
            <div style={sideBar}></div>

        </div>
    );
}

export default MyPage;