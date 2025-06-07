const cardStyle = {
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 10,
  border: '1px solid gray',
  padding: 20,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        {image && <img
          src={image}
          alt="avatar"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            objectFit: 'cover'
          }}
        />}
        <div style={{ marginLeft: 12, fontSize: 14 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: '#555' }}>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                alt="clock"
                style={{ width: 14, height: 14, marginRight: 6 }}
              />
              <span>{time}</span>
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 14, color: '#333' }}>
        {description}
      </div>
    </div>
  );
}
