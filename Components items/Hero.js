import React from 'react';

function Hero() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Holiday Central</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Flights</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hotels</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Holiday Package</a>
                        </li>

                    </ul>
                </div>
                <div className="btn btn-primary fw-bold ms-1">Login</div>
                <div className="btn btn-dark fw-bold ms-1">Register</div>
                
            </nav>
        </div>
    );
}

export default Hero;