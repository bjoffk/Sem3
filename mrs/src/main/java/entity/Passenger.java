package entity;

import com.google.gson.annotations.Expose;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Passenger {

    @Expose
    public String firstName;
    @Expose
    public String lastName;

    public Passenger() {
    }

    public Passenger(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Passenger{" + "firstName=" + firstName + ", lastName=" + lastName + '}';
    }
}
