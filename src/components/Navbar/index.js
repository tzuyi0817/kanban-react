import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => (
  <nav className="navbar">

    <div className="navbar-left row">

      {/* home */}
      <Link to="#" className="btn navbar-icon"><FontAwesomeIcon icon="home" /></Link>

      {/* kanban */}
      <Link to="#" className="btn navbar-icon"><FontAwesomeIcon icon={['fab', 'trello']} />&nbsp;&nbsp;看板</Link>

      {/* search */}
      <form>
        <div className="input-group search-box">
          <input className="form-control form-control-inline" type="text" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="input-group-text searchBtn lighten-3" type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </form>

    </div>

    {/* toggle */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="bars-icon"><FontAwesomeIcon icon="bars" /></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form>
        <div className="input-group">
          <input className="form-control form-control-inline" type="text" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="input-group-text searchBtn lighten-3" type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </form>

    </div>

    <div className="navbar-title">
      <Link className="navbar-brand" to="#">My-Kanban</Link>
    </div>

    <div className="navbar-right row">

      {/* create kanban */}
      <div className="dropdown">
        <button className="btn navbar-icon" id="dropdownCreate" data-toggle="dropdown">
          <FontAwesomeIcon icon="plus" />
        </button>

        <div className="dropdown-menu create-menu shadow" aria-labelledby="dropdownCreate">
          <p className="create-title">新建</p>

          <hr />

          <div className="create-btn">
            <p className="create-content-title"><FontAwesomeIcon icon={['fab', 'trello']} />&nbsp;建立看板</p>
            <p className="create-content">看板是由一張張卡片構成的列表所組成，可以用來管理專案、追蹤資訊，或是管理任何事務。</p>
          </div>

          <div className="create-btn">
            <p className="create-content-title"><FontAwesomeIcon icon="user-friends" />&nbsp;建立團隊</p>
            <p className="create-content">團隊是由看板與成員群組所組成，可用來將公司業務、副業，甚至親朋好友分門別類。</p>
          </div>

          <div className="create-btn">
            <p className="create-content-title"><FontAwesomeIcon icon="object-group" />&nbsp;建立事業團隊</p>
            <p className="create-content">商務級方案可給予團隊更安全的使用環境、更周全的管控選項，並可無限使用 Power-Up。</p>
          </div>
        </div>
      </div>

      {/* information */}
      <div className="dropdown">
        <button className="btn navbar-icon" id="dropdownCreate" data-toggle="dropdown">
          <FontAwesomeIcon icon="info-circle" />
        </button>

        <div className="dropdown-menu info-menu shadow" aria-labelledby="dropdownCreate">
          <p className="info-title">資訊</p>

          <hr />

          <img
            src="https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2015/04/informationoverload.jpg"
            alt=""
            width="100%"
          />

          <hr />

          <div className="info-content-box">
            <div className="info-btn">
              <p className="info-content">價格</p>
            </div>

            <div className="info-btn">
              <p className="info-content">APP</p>
            </div>

            <div className="info-btn">
              <p className="info-content">部落格</p>
            </div>

            <div className="info-btn">
              <p className="info-content">隱私權</p>
            </div>
          </div>
        </div>
      </div>

      {/* notice */}
      <div className="dropdown">
        <button className="btn navbar-icon" id="dropdownCreate" data-toggle="dropdown">
          <FontAwesomeIcon icon="bell" />
        </button>

        <div className="dropdown-menu notice-menu shadow" aria-labelledby="dropdownCreate">
          <p className="notice-title">通知</p>

          <hr />

          <div class="notice-content-box">
            <h7>沒有未讀通知</h7>
          </div>

        </div>
      </div>

      {/* profile */}
      <div className="dropdown">
        <button className="btn navbar-icon" id="dropdownCreate" data-toggle="dropdown">
          <FontAwesomeIcon icon="id-badge" />
        </button>

        <div className="dropdown-menu profile-menu shadow" aria-labelledby="dropdownCreate">
          <p className="profile-title">tzuyi</p>

          <hr />

          <div class="profile-content-box">
            <ul>
              <li>
                <Link to="#"><span>個人檔案和觀看權限</span></Link>
              </li>

              <li>
                <Link to="#"><span>活動</span></Link>
              </li>

              <li>
                <Link to="#"><span>卡片</span></Link>
              </li>

              <li>
                <Link to="#"><span>設定</span></Link>
              </li>
            </ul>

            <hr />

            <ul>
              <li>
                <Link to="#"><span>幫助</span></Link>
              </li>

              <li>
                <Link to="#"><span>快速鍵</span></Link>
              </li>

              <li>
                <Link to="#"><span>更改語言</span></Link>
              </li>
            </ul>

            <hr />

            <span className="btn logout col-12">登出</span>
          </div>

        </div>
      </div>

    </div>

  </nav >
)

export default Navbar