package br.com.contato.resource;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import org.codehaus.jettison.json.JSONArray;

import br.com.entidade.Contato;
import br.com.entidade.Operadora;
import br.com.util.AppUtil;

@Path("/contato.resource")
public class ContatoResource {

	@Context
	UriInfo uriInfo;
	
	private static List<Contato> lista = new ArrayList<Contato>();
	static {
		lista.add(new Contato("Eliezer","1231-1231", new Date(), new Operadora("Oi", "12","Celular", 3)));
		lista.add(new Contato("Ana","23123-4234", new Date(), new Operadora("Tim", "12","Celular", 3)));
		lista.add(new Contato("Claudia","34240-24234", new Date(), new Operadora("Vivo", "12","Celular", 3)));
	}	 
	
	 
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Contato> listarContatos(){	
        return lista;
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Contato getUsuarioById(@PathParam("id") Integer id) {
		return new Contato();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvar(Contato contato){
		lista.add(contato);
	}

}
