function FindProxyForURL(url, host) {
  if (url.substring(0, 5) == "http:") {
    return "PROXY proxy:80";
  }
  else if (url.substring(0, 4) == "ftp:") {
    return "PROXY fproxy:80";
  }
  else if (url.substring(0, 7) == "gopher:") {
    return "PROXY gproxy";
  }
  else if (url.substring(0, 6) == "https:") {
    return "PROXY secproxy:8080";
  }
  else {
    return "DIRECT";
  }
}