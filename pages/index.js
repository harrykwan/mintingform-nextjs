import Head from "next/head";
import Script from "next/Script";
import Image from "next/image";

import NavButton from "../components/navButton.js";
import Question from "../components/question.js";
import TopBar from "../components/topBar.js";

import { useState } from "react";

export default function Home() {
  const pagecount = 8;
  const [pagenum, setpagenum] = useState(0);
  const [formans, setformans] = useState({
    artist_name: "",
    artist_email: "",
    artist_socialmedia: "",

    release_identifier: "",
    release_name: "",
    release_description: "",
    release_coverimg: "",
    release_externallink: "",
    release_royality: "",
    release_walletdistribution: [],

    songs: [],
  });

  const inputchange = function (name, value) {
    setformans({
      ...formans,
      [name]: value,
    });
  };

  const checklistitems = [
    "Pop",
    "Jazz",
    "Blues",
    "Funk",
    "EDM",
    "Country",
    "Post Rock",
    "Math Rock",
    "Alternative Rock",
  ];

  const songdetailtemplate = function (index) {
    return (
      <>
        <Question title="歌曲名稱" />
        <Question title="歌曲簡介 " type="lq" />
        <Question
          title="歌曲封面"
          description="如您沒有提供封面，Recoroad會使用專輯封面作代替。建議提供其他平台如indiecast.fm、Spotify的連結。"
        />
        <Question title="歌曲檔案" />
        <Question
          title="歌曲連結"
          description="建議提供其他平台如indiecast.fm、Spotify的連結。"
        />
        <Question title="發佈日期" inputtype="date" />
        <Question
          title="音樂類型"
          checklistitems={checklistitems}
          type="checkbox"
        />
        <Question title="協作者及製作人員" type="customtable2" />
        <Question title="其他附加資料" type="lq" />
        <Question
          title="鑄造數量"
          description="⚠️⚠️⚠️請注意⚠️⚠️⚠️ NFT鑄造成功後，增加供應數量會影響其價值，請仔細考慮發行數量。"
        />
        <Question title="鑄造目的地址（加密貨幣錢包地址)" />
        <Question
          type="yesno"
          questionnum={index}
          title="需要訂立與專輯不同的版稅分成比例嗎？"
        />
      </>
    );
  };

  const [songdetail, setSongdetail] = useState([songdetailtemplate(0)]);

  const appendsongdetail = function () {
    setSongdetail([...songdetail, songdetailtemplate(setSongdetail.length)]);
  };

  function prevpage() {
    if (pagenum > 0) {
      setpagenum(pagenum - 1);
    }
  }

  function nextpage() {
    if (pagenum < pagecount - 1) {
      setpagenum(pagenum + 1);
    }
  }

  function submit() {
    console.log("submit");
  }

  return (
    <div>
      <TopBar />
      <main>
        <div className="container-fluid ">
          <div className="customprogressbar_outside ">
            <div
              className="customprogressbar_inside"
              style={{
                width: ((pagenum + 1) / pagecount) * 100 + "%",
              }}
            ></div>
          </div>
          <div id="form_container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div id="wizard_container">
                  <form id="wrapped">
                    <div id="middle-wizard">
                      {pagenum == 0 && (
                        <div className="step">
                          <h1>關於Recoroad</h1>
                          <div>
                            Recoroad是由4個大專Band
                            Soc出身的畢業生所成立的一間音樂NFT初創公司。我們希望構建一個元宇宙的音樂創意空間，音樂人可以突破土地問題在元宇宙上舉辦音樂會、創作、即興表演，甚至互相分享收藏的樂器、設備、音響。
                            <br />
                            <br />
                            網站：
                            <a href="https://www.recoroad.com">
                              https://www.recoroad.com
                            </a>
                            <br />
                            Facebook：
                            <a href="https://www.facebook.com/recoroadhk">
                              https://www.facebook.com/recoroadhk
                            </a>
                            <br />
                            Instagram：
                            <a href="https://www.instagram.com/recoroad_hk">
                              https://www.instagram.com/recoroad_hk
                            </a>
                            <br />
                            <div />
                          </div>
                        </div>
                      )}
                      {pagenum == 1 && (
                        <div className="step">
                          <h3>為何要使用Recoroad的NFT鑄造服務？</h3>
                          <div>
                            <ol style={{ listStyleType: "decimal" }}>
                              <li className="mb-2 mt-4">
                                Recoroad提供免費的鑄造服務，降低您進入Web
                                3的門檻。在是次測試階段，我們只會在每次交易收取2.5%的手續費。
                              </li>
                              <li className="mt-3">
                                我們使用ERC-1155協定開發Recoroad的智能合約，能讓您以較低的燃料費批量鑄造NFT到區塊鏈上。
                              </li>
                              <li className=" mt-3">
                                Recoroad的智能合約包含版稅分配功能，並使用ERC-2981制式，令您及您的製作團隊享有持續的版稅收入。
                              </li>
                              <li className=" mt-3">
                                我們的Metadata格式與OpenSea相容，使您的音樂作品可以在全球最大的NFT銷售平台上架。
                              </li>
                            </ol>
                          </div>
                        </div>
                      )}
                      {pagenum == 2 && (
                        <div className="step">
                          <h3>事前準備</h3>
                          <div>
                            <ol style={{ listStyleType: "decimal" }}>
                              <li className="mb-2 mt-4">
                                擁有一個已連接Polygon鏈的加密貨幣錢包 (
                                <a href="https://metamask.io">MetaMask</a>)
                                如果沒有MetaMask加密貨幣錢包，請參考
                                <a href="https://www.recoroad.com/blog/metamask-opensea-tutorial">
                                  教學文章
                                </a>
                              </li>
                              <li className="mt-3">專輯及歌曲資料和檔案</li>
                              <li className=" mt-3">
                                協作者的加密貨幣錢包地址
                              </li>
                            </ol>
                          </div>
                        </div>
                      )}
                      {pagenum == 3 && (
                        <div className="step">
                          <h1 className="mb-4">音樂單位資料</h1>
                          <Question
                            customonchange={inputchange}
                            customvalue={formans.artist_name}
                            name="artist_name"
                            title="音樂單位名稱"
                          />
                          <Question
                            customonchange={inputchange}
                            customvalue={formans.artist_email}
                            name="artist_email"
                            title="電郵"
                          />
                          <Question
                            title="社交媒體連結"
                            customonchange={inputchange}
                            customvalue={formans.artist_socialmedia}
                            name="artist_socialmedia"
                            description="Facebook, Instagram, Spotify, YouTube etc"
                          />
                        </div>
                      )}
                      {pagenum == 4 && (
                        <div className="step">
                          <h1 className="mb-4">專輯資訊</h1>
                          <Question
                            title="專輯序號"
                            photourl="https://lh6.googleusercontent.com/ErqT3zAV-tPlcsyEGk1ofZCewjfQGm34VXZoNkAJn8xwSFsyR-IHYoFSWbmsfsFw6wHbRUOBXLLVmjzQldQfUP785l1p_TL-no6LoU03RoG33LS0fI2D7IedC21i4f8gQg=w740"
                            description="請為您的專輯定立一個獨一無二的序號用作網址的後半段（只接受英文、數字及半形破折號）。日後您能使用這個序號新增歌曲在同一個專輯上。（e.g. 以下為填寫kcl-music的例子）
"
                            customonchange={inputchange}
                            customvalue={formans.release_identifier}
                            name="release_identifier"
                          />
                          <Question
                            title="專輯名稱"
                            description="請注意OpenSea未能顯示中文名稱，請確認您需要設定成中文。"
                            customonchange={inputchange}
                            customvalue={formans.release_name}
                            name="release_name"
                          />

                          <Question
                            title="專輯簡介"
                            type="lq"
                            customonchange={inputchange}
                            customvalue={formans.release_externallink}
                            name="release_externallink"
                          />

                          <Question
                            title="專輯連結"
                            description="建議提供其他平台如indiecast.fm、Spotify的連結。"
                            customonchange={inputchange}
                            customvalue={formans.release_description}
                            name="release_description"
                          />
                          <Question
                            title="版稅分成比例"
                            inputtype="number"
                            description="建議定立8 - 15%的版稅分成。"
                            customonchange={inputchange}
                            customvalue={formans.release_royality}
                            name="release_royality"
                          />
                          <Question
                            targetarray={formans.release_walletdistribution}
                            customonchange={inputchange}
                            targetarrayname="release_walletdistribution"
                            title="版稅分成明細"
                            type="customtable1"
                          />
                        </div>
                      )}
                      {pagenum == 5 && (
                        <div className="step">
                          <h1>歌曲資訊</h1>
                          歌曲數量： {songdetail.length}
                          {songdetail.map((item, index) => (
                            <div
                              style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                              }}
                              className="p-4 mt-4"
                              key={index}
                            >
                              {item}
                            </div>
                          ))}
                          <button
                            className="customaddbutton mt-3"
                            type="button"
                            onClick={appendsongdetail}
                          >
                            +
                          </button>
                        </div>
                      )}
                      {pagenum == 6 && (
                        <div className="step">
                          <h1>預覽</h1>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NavButton
        pagenum={pagenum}
        prevpage={prevpage}
        nextpage={nextpage}
        maxpagenum={pagecount - 1}
      />
    </div>
  );
}
