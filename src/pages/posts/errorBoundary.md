---
layout: layouts/MarkdownPostLayout.astro
title: 'Error Boundary'
pubDate: 2023-22-06
description: ''
author: 'Anandu Babu'
image:
    url: 'https://docs.astro.build/assets/full-logo-lighjt.png' 
    alt: 'The full reactjs logo.'
tags: ["astro", "blogging", "learning in public"]

---

```js

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(_error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Result
          title="Something went wrong"
          status="error"
          subTitle="We are working on this please wait"
          extra={[
            <p>Please contact our customer support if the issue persist</p>
          ]}
        />
      );
    }
    return this.props.children;
  }
}

```
