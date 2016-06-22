function FindProxyForURL(url, host) {
//	return "PROXY 192.168.1.2:8118; SOCKS 192.168.1.2:9050";
// Local lan.
	if (
		isInNet(host, "192.168.0.0", "255.255.0.0")
		|| isInNet(host, "127.0.0.0", "255.0.0.0")
	){
		return "DIRECT";
	}
// This doesn't work (Yet) they seem to restrict some otherway..
	if (
		dnsDomainIs(host, ".rumblegames.com")
		|| (
			localHostOrDomainIs(host, "apps.facebook.com")
			&& shExpMatch(host, "*/ballistic*")
		)
	){
		return "SOCKS 127.0.0.1:9050; SOCKS 192.168.1.2:9050";
	}
// Everything else to local privoxy or its lan IP.
	return "PROXY 127.0.0.1:8118; PROXY 192.168.1.2:8118";
}