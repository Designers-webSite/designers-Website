package com.example.demo.Security;

import com.example.demo.Filter.CustomAuthenticationFilter;
import com.example.demo.Filter.CustomAuthorizationFilter;
import com.example.demo.User.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private  final UserRepository userRepository;

    public SecurityConfig(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder, UserRepository userRepository) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean(), userRepository);
        customAuthenticationFilter.setFilterProcessesUrl("/login");
        http.csrf().disable();
        http.cors().configurationSource(request -> {
            var cors = new CorsConfiguration();
            cors.setAllowedOrigins(List.of("*"));
            cors.setAllowedMethods(List.of("GET","POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(List.of("*"));
            return cors;});


        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.authorizeRequests().antMatchers(  HttpMethod.POST,"/login").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/user").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/user/**").permitAll();

        http.authorizeRequests().antMatchers( "/user/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.PUT,"/user/**").permitAll();http.authorizeRequests().antMatchers( HttpMethod.POST,"/gallery").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/gallery").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/gallery/**").permitAll();http.authorizeRequests().antMatchers( HttpMethod.POST,"/utility").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/utility/**").permitAll();

        http.authorizeRequests().antMatchers(HttpMethod.GET,"/utility/**").permitAll();
      http.authorizeRequests().antMatchers( HttpMethod.DELETE,"/utility/**").permitAll();
      http.authorizeRequests().antMatchers( HttpMethod.PUT,"/utility/**").hasAuthority("designer");
      http.authorizeRequests().antMatchers( HttpMethod.DELETE,"/gallery/**").hasAuthority("designer");
       http.authorizeRequests().antMatchers( HttpMethod.PUT,"/gallery/**").hasAuthority("designer");
        //لازم كل ريكويست يكون authenticated
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }
    


}
