package mx.uv.practica11;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.joran.spi.HttpUtil.RequestMethod;

@RestController
@SpringBootApplication
public class Practica11Application {

	Color color = new Color();

	public static void main(String[] args) {
		SpringApplication.run(Practica11Application.class, args);
	}

	// API relativo a los colores
@RequestMapping (method=RequestMethod.PUT, value= "/color")
	String cambiarColor(@RequestBody String objeto){
		System.out.println(objeto);
		return "{'Color : cambiado'}";
	}
@RequestMapping (method=RequestMethod.DELETE, value= "/color")
	String eliminarColor(@PathVariable String id){
		System.out.println(id);
		color = null;
		return "{'Color : eliminado'}";
	}
@RequestMapping (method=RequestMethod.GET, value= "/color")
	String listarColor(){
		return color;
	}
@RequestMapping (method=RequestMethod.POST, value= "/color")
	String crearColores(){
		color.setId(id:"1");
		color.setNombreColor(nombreColor:"blanco");
		color.setValorColor(valorColor:"255");
		System.out.println(color.getNombreColor());
		return "Color creado";
	}

}
