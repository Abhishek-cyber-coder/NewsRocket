// CLASS BASED COMPONENT FILE
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   }
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsRocket`
//   }
//   async updateNews(){
//     this.props.setProgress(10)
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     this.props.setProgress(30)
//     let data = await fetch(url);
//     this.props.setProgress(50)
//     let parsedData = await data.json();
//     this.props.setProgress(80)
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100)
//   }
//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90619ef17fb45f28f23dc765f1d7a19&page=1&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     this.updateNews();
//   }
//   // handleOnPrevClick = async () => {
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90619ef17fb45f28f23dc765f1d7a19&page=${
//   //   //   this.state.page - 1
//   //   // }&pageSize=${this.props.pageSize}`;
//   //   // this.setState({ loading: true });
//   //   // let data = await fetch(url);
//   //   // let parsedData = await data.json();
//   //   // this.setState({
//   //   //   articles: parsedData.articles,
//   //   //   page: this.state.page - 1,
//   //   //   loading: false,
//   //   // });
//   //   this.setState({
//   //     page: this.state.page - 1
//   //   });
//   //   this.updateNews()
//   // };
//   // handleOnNextClick = async () => {
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a90619ef17fb45f28f23dc765f1d7a19&page=${
//   //   //   this.state.page + 1
//   //   // }&pageSize=${this.props.pageSize}`;
//   //   // if (
//   //   //   !(
//   //   //     this.state.page + 1 >
//   //   //     Math.ceil(this.state.totalResults / this.props.pageSize)
//   //   //   )
//   //   // ) {
//   //   //   this.setState({ loading: true });
//   //   //   let data = await fetch(url);
//   //   //   let parsedData = await data.json();
//   //   //   this.setState({
//   //   //     articles: parsedData.articles,
//   //   //     page: this.state.page + 1,
//   //   //     loading: false,
//   //   //   });
//   //   // }

//   //   this.setState({page: this.state.page + 1});
//   //   this.updateNews()
//   // };
//   fetchMoreData = async () => {
//     this.setState({page: this.state.page + 1});
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1 className="text-center my-3">NewsRocket - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//             <div className="row">
//                 {this.state.articles.map((element) => {
//                   return <div className="col-md-4" key={element.url}>
//                     <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
//                   </div>
//                 })}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className="d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleOnPrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleOnNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       </>
//     );
//   }
// }
// export default News;

//FUNCTION BASED COMPONENT TYPE
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=73b3fced5aca43a2810e781163366cb0&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsRocket`;
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=73b3fced5aca43a2810e781163366cb0&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "75px" }}>
        NewsRocket - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
