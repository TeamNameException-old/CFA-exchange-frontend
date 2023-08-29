import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserPage from "./UI/pages/UserPage";
import CFAPage from "./UI/pages/CFAPage";
import NavBar from "./UI/components/NavBar";
import EmptyError from "./UI/components/error/EmptyError";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route path="" element={<EmptyError />} />
                    <Route path="users">
                        <Route path="" element={<EmptyError />} />
                        <Route path=":userId" element={<UserPage />} />
                    </Route>
                    <Route path="cfa">
                        <Route path="" element={<CFAPage isCfaView={0} />} />
                        <Route path=":cfaId" element={<CFAPage isCfaView={1} />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
