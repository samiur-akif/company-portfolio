import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <aside className="widget-area" id="secondary">
                {/* Search form */}
                <div className="widget widget_search">
                    <form className="search-form">
                        <input type="search" className="search-field" placeholder="Search..." />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Recent Posts */}
                <div className="widget widget_zash_posts_thumb">
                    <h3 className="widget-title">Recent Posts</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time className="2020-06-30">June 10, 2020</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </a>
                                </Link>
                            </h4>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time className="2020-06-30">June 21, 2020</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time className="2020-06-30">June 30, 2020</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>minim veniam, quis nostrud exercitation ullamco</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    Business
                                    <span className="post-count">(05)</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Privacy
                                    <span className="post-count">(10)</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Technology 
                                    <span className="post-count">(15)</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Tips 
                                    <span className="post-count">(10)</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Uncategorized 
                                    <span className="post-count">(05)</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Tags */}
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>IT <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Crimso <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Games <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Fashion <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Travel <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Smart <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Marketing <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Tips <span className="tag-link-count"> (2)</span></a>
                        </Link>
                    </div>
                </div>
            </aside>
        );
    }
}

export default BlogSidebar;