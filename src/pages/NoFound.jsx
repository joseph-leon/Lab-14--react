import {
    Link,
} from "react-router-dom";

import Notofoundo from '../assets/imgs/404.jpg'
function NotFound() {
    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mt-4">
                            <img class="mb-4 img-error" src={Notofoundo} />
                            <p class="lead">This requested URL was not found on this server.</p>
                            <a href="index.html">
                                <Link to="/">
                                    Regresar al Inicio
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound
