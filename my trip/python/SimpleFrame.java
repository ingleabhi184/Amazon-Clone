import javax.swing.*;


public class SimpleFrame {

    public static void main(String[] args) {
        // Create a new JFrame
        JFrame frame = new JFrame("My First JFrame");

        // Set the default close operation
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Create a JPanel
        JPanel panel = new JPanel();
        
        // Create a JLabel and add it to the panel
        JLabel label = new JLabel("Hello, World!");
        panel.add(label);

        // Add the panel to the frame
        frame.add(panel);

        // Set the size of the frame
        frame.setSize(400, 300);

        // Set the frame to be visible
        frame.setVisible(true);
    }
}
