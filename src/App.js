import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UserPage from "./UI/pages/UserPage";
import CFAPage from "./UI/pages/CFAPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<h1>Welcome</h1>} />
                    <Route path="users">
                        <Route path="" element={<h1>users</h1>} />
                        <Route path=":userId" element={<UserPage />} />
                    </Route>
                    <Route path="cfa">
                        <Route path="" element={<h1>all cfa</h1>} />
                        <Route path=":cfaId" element={<CFAPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
