import "./styles.scss"

export function Terminal() {
    return (
        <div className="Terminal">
            <div className="header">
                <div className="buttons">
                    <div className="btnRed"></div>
                    <div className="btnYellow"></div>
                    <div className="btnGreen"></div>
                </div>
                <div className="title">/home/brunohubner -- 80 x 24</div>
            </div>
            <div className="body">
                <div className="text">
                    $ git commit -m "feat: brunohubner.com works"
                </div>
            </div>
        </div>
    )
}
