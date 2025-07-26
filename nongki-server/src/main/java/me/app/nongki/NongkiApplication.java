package me.app.nongki;

import me.app.nongki.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class NongkiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NongkiApplication.class, args);
	}

}
