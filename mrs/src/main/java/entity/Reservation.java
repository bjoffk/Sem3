package entity;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name = "RESERVATION")
public class Reservation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Expose
    String flightID;

    @Expose
    int numberOfSeats;

    @Expose
    String reserveeName;

    @Expose
    String reservePhone;

    @Expose
    String reserveeEmail;

    @OneToMany(cascade = CascadeType.PERSIST)
    @Expose
    List<Passenger> passengers;

    public Reservation() {
    }

    public Reservation(String flightID, int numberOfSeats, String reserveeName, String reversePhone, String reserveeEmail, List<Passenger> passengers) {
        this.flightID = flightID;
        this.numberOfSeats = numberOfSeats;
        this.reserveeName = reserveeName;
        this.reservePhone = reversePhone;
        this.reserveeEmail = reserveeEmail;
        this.passengers = passengers;
    }

    public int getId() {
        return id;
    }

    public String getFlightID() {
        return flightID;
    }

    public void setFlightID(String flightID) {
        this.flightID = flightID;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public String getReserveeName() {
        return reserveeName;
    }

    public void setReserveeName(String reserveeName) {
        this.reserveeName = reserveeName;
    }

    public String getReservePhone() {
        return reservePhone;
    }

    public void setReservePhone(String reservePhone) {
        this.reservePhone = reservePhone;
    }

    public String getReserveeEmail() {
        return reserveeEmail;
    }

    public void setReserveeEmail(String reserveeEmail) {
        this.reserveeEmail = reserveeEmail;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }

}
